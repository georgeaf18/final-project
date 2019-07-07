import { Component, OnInit } from "@angular/core";
import { Api } from "./services/api.services";
import { outfitMap } from "./clothing-items/clothing";

interface Hourly {
  data;
  apparentTemperature: number;
  icon: string;
  precipProbability: number;
  summary: string;
  temperature: number;
  time: number;
  windSpeed: number;
}

interface Currently {
  apparentTemperature: number;
  icon: string;
  humidity: number;
  time: number;
  temperature: number;
}

interface Daily {
  data;
}

interface ApiData {
  currently: Currently;
  hourly: Hourly;
  daily: Daily;
}

interface LocationData {
  latitude: number;
  longitude: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "final-project";

  apparentTemperature;
  currently;
  icon;
  humidity;
  lat: number;
  long: number;
  weatherType: string;
  eventType: string = "casual";
  preEvent: number = 1;

  picurlHOLDEN;

  showHeadwear: boolean = false;
  showFacewear: boolean = false;
  showUpperbody: boolean = false;
  showUpperbodyOuter: boolean = false;
  showLowerbody: boolean = false;
  showFootwear: boolean = false;

  night: boolean = false;
  genderInput: boolean = false;
  gender: string = "male";
  speech: string = "Have a great day today!";

  morningTempArray = [];
  morningTempAverage: number = 0;
  morningMin;
  morningMax;
  afternoonTempArray = [];
  afternoonTempAverage: number = 0;
  afternoonMin;
  afternoonMax;

  inputDate: string;
  theHour: number;

  ngOnInit() {
    this.getLocation();
  }

  constructor(private api: Api) {}

  //******************************** get location through navigator's geolocation function */

  getLocation = () => {
    this.api.getLocationAPI().subscribe((data: LocationData) => {
      this.lat = data.latitude;
      this.long = data.longitude;
      this.getData();
    });
  };

  //******************************** gets data from Dark Sky api  */

  getData = () => {
      this.api.weather.subscribe((response: ApiData) => {
        let data = response;
        // this.inputDate = inputValue;

        if (!data) {

          this.api
            .getWeather(this.lat, this.long)
            .subscribe((apiData: ApiData) => {
              let data = apiData;
              console.log("TCL: AppComponent -> getData -> data", data);
              this.api.updateWeather(data);

              // Create a new JavaScript Date object based on the timestamp
              // // multiplied by 1000 so that the argument is in milliseconds, not seconds.
              // let date = new Date(data.currently.time * 1000);
              // // Hours part from the timestamp
              // let hours = date.getHours();
              // // Minutes part from the timestamp
              // let minutes = "0" + date.getMinutes();
              // // Seconds part from the timestamp
              // let seconds = "0" + date.getSeconds();

              // // Will display time in 10:30:23 format
              // let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

              this.apparentTemperature = data.currently.apparentTemperature;
              this.icon = data.currently.icon;

              if (this.night === true) {
                this.api.nightAvg.subscribe(
                  data => (this.apparentTemperature = data)
                );
              } else {
                this.apparentTemperature = data.currently.apparentTemperature;
              }

              if (typeof this.apparentTemperature === "number") {
                this.getOutfit();
              }
            });
        }

        // will get the outfit once the temperature is on hand
        if (typeof this.apparentTemperature === "number") {
          this.getOutfit();
        }
      });
  };

  //******************** returns a weather type depending the temperature ********************/

  getOutfit = () => {
    setTimeout(() => {
      if (this.night === true) {
        this.api.nightAvg.subscribe(data => (this.apparentTemperature = data));
      } else {
        this.api.dayAvg.subscribe(data => (this.apparentTemperature = data));
      }

      if (typeof this.weatherType !== "string") {
        if (this.apparentTemperature >= 95) {
          this.weatherType = "very hot";
        } else if (
          this.apparentTemperature >= 80 &&
          this.apparentTemperature <= 94
        ) {
          this.weatherType = "hot";
        } else if (
          this.apparentTemperature > 69 &&
          this.apparentTemperature <= 79
        ) {
          this.weatherType = "warm";
        } else if (
          this.apparentTemperature > 50 &&
          this.apparentTemperature <= 68
        ) {
          this.weatherType = "chilly";
        } else if (
          this.apparentTemperature > 33 &&
          this.apparentTemperature <= 49
        ) {
          this.weatherType = "cold";
        } else if (
          this.apparentTemperature > 1 &&
          this.apparentTemperature <= 32
        ) {
          this.weatherType = "very cold";
        } else if (this.apparentTemperature < 0) {
          this.weatherType = "extremely cold";
        }
      }

      if (typeof this.weatherType === "string") {
        this.getOutfitUrl();

        this.setSpeech();
      }
    }, 1000);
  };

  getOutfitUrl = () => {
    this.picurlHOLDEN =
      outfitMap[`${this.weatherType}:${this.eventType}`][this.gender];
  };

  getEvent = () => {
    if (this.preEvent === 1) {
      this.eventType = "casual";
      this.getData();
    } else if (this.preEvent === 2) {
      this.eventType = "business_casual";
      this.getData();
    } else if (this.preEvent === 3) {
      this.eventType = "formal";
      this.getData();
    }
  };

  changeColor = () => {
    return {
      darkTheme: this.night
    };
  };

  activateDark = () => {
    this.night = true;
  };

  activateLight = () => {
    this.night = false;
  };

  setGender = () => {
    if (this.genderInput === true) {
      this.gender = "male";
      this.getData();
    }

    if (this.genderInput === false) {
      this.gender = "female";
      this.getData();
    }
  };

  setSpeech = () => {
    if (this.icon === "rainy" || this.icon === "sleet") {
      this.speech = "Don't forget to grab an umbrella and some rain boots!";
    } else if (this.icon === "snow") {
      this.speech = "Don't forget to grab your snow boots";
    }
  };
}
