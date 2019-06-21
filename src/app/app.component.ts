import { Component, OnInit } from '@angular/core';
import { Api } from './services/api.services';

interface Hourly {
  data;
  apparentTemperature: number;
  humidity: number;
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'final-project';

  apparentTemperature;
  currently;
  icon;
  humidity;
  lat: number;
  long: number;
  weatherType: string;
  eventType: string = 'casual';
  preEvent: number = 1;

  gender: string = 'male';

  ngOnInit() {
    this.getLocation();
  }

  constructor(private api: Api) {}

  //******************************** get location through navigator's geolocation function */ 
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.sendLocation);
    }
  }

  sendLocation = (position) => {
    this.lat = position.coords.latitude;
    this.long = position.coords.longitude;
    this.getData();
  }
  //******************************** gets data from Dark Sky api  */ 

  lowTemp;
  highTemp;
  realTemp;

  theHour;
  fullDayArray = [];
  morningTempArray = [];
  morningTempAverage: number = 0;
  morningMin;
  morningMax;
  afternoonTempArray = [];
  afternoonTempAverage: number = 0;
  afternoonMin;
  afternoonMax;

  getData = () => {
    this.api.getWeather(this.lat, this.long).subscribe((data: ApiData) => {
      this.apparentTemperature = data.currently.apparentTemperature;

      this.realTemp = data.currently.temperature;
      // console.log(`this.realTemp: ${this.realTemp}`);

      this.icon = data.currently.icon;
      this.humidity = data.currently.humidity;
      console.log(data);


      let hourCounter: number;
      this.theHour = data.hourly.data;
      for (hourCounter = 1; hourCounter < 24; hourCounter++) {
        let currentAppTemp = this.theHour[hourCounter].apparentTemperature;
        // this.morningTempAverage += currentAppTemp;
        this.fullDayArray.push(currentAppTemp);
        // console.log(`this.fullDayArray: ${this.fullDayArray}`);
      };

      for (hourCounter = 5; hourCounter < 12; hourCounter++) {
        let currentAppTemp = this.theHour[hourCounter].apparentTemperature;
        this.morningTempAverage += currentAppTemp;
        this.morningTempArray.push(currentAppTemp);
        // console.log(currentAppTemp);
      };
      // console.log(`this.morningTempAverage: ${this.morningTempAverage}`);
      this.morningTempAverage = this.morningTempAverage / this.morningTempArray.length;
      for (hourCounter = 12; hourCounter < 25; hourCounter++) {
        let currentAppTemp = this.theHour[hourCounter].apparentTemperature;
        this.afternoonTempAverage += currentAppTemp;
        this.afternoonTempArray.push(currentAppTemp);
        // console.log(currentAppTemp);
      };
      this.afternoonTempAverage = this.afternoonTempAverage / this.afternoonTempArray.length;
      // console.log(`this.morningTempArray: ${this.morningTempArray}`);
      this.morningMin = Math.min.apply(null, this.morningTempArray);
      this.morningMax = Math.max.apply(null, this.morningTempArray);
      // console.log(this.morningMin);
      // console.log(this.morningMax);
      // console.log(this.morningTempArray.length)
      console.log(`this.morningTempAverage ASDFASDF ASDF ASDF ASDF ASD ${this.morningTempAverage}`);

      // console.log(`this.afternoonTempArray: ${this.afternoonTempArray}`);
      // console.log(this.afternoonTempArray.length)
      // console.log(`this.afternoonTempAverage: ${this.afternoonTempAverage}`);
      this.afternoonMin = Math.min.apply(null, this.afternoonTempArray);
      this.afternoonMax = Math.max.apply(null, this.afternoonTempArray);
      // console.log(this.afternoonMin);
      // console.log(this.afternoonMax);

      // console.log(`data.hourly.data: ${data.hourly.data[0]}`);
      // console.log(data);

      this.lowTemp = data.daily.data[0].apparentTemperatureLow;
      this.highTemp = data.daily.data[0].apparentTemperatureHigh;
      // console.log(`this.lowTemp: ${this.lowTemp}`);
      // console.log(`this.highTemp: ${this.highTemp}`);

      // console.log(`the time: ${data.currently.time}`);
      // console.log(`the alert: ${data.flags.sources[0]}`);




      // // Create a new JavaScript Date object based on the timestamp
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

      // // console.log(`formatted time: ${formattedTime}`);

    })
  }
}