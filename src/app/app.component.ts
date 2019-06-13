import { Component } from '@angular/core';
import { Api } from './services/api.services';

const outfitMap = {

  'very_hot:casual': 'wear a shirt, pants and tennis shoes. It\'s very_hot',
  'very_hot:formal': 'very_hot',
  'very_hot:bussiness_casual': 'very_hot',

  'hot:casual': 'wear a shirt, pants and tennis shoes. It\'s hot',
  'hot:formal': 'hot',
  'hot:bussiness_casual': 'hot',

  'warm:casual': 'wear a shirt, pants and tennis shoes. It\'s nice out',
  'warm:formal': 'warm',
  'warm:bussiness_casual': 'warm',

  'chilly:casual': 'wear a shirt, pants and tennis shoes. It\'s nice out',
  'chilly:formal': 'chilly',
  'chilly:bussiness_casual': 'chilly',

  'cold:casual': 'wear a shirt, pants and tennis shoes. It\'s nice out',
  'cold:formal': 'cold',
  'cold:bussiness_casual': 'cold',

  'very_cold:casual': 'wear a shirt, pants and tennis shoes. It\'s nice out',
  'very_cold:formal': 'very_cold',
  'very_cold:bussiness_casual': 'very_cold',

  'extremely_cold:casual': 'We recommend to avoid going out due to the extreme tempertures',
  'extremely_cold:formal': 'We recommend to avoid going out due to the extreme tempertures',
  'extremely_cold:bussiness_casual': 'We recommend to avoid going out'

}

interface Hourly {
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
}

interface ApiData {
  currently: Currently;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';

  hourly: Hourly[] = [];

  apparentTemperature;
  currently;
  icon;
  humidity;
  lat: number;
  long: number;
  weatherType: string;
  eventType: string = 'casual';


  constructor(private api: Api) {

  }










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


  getData = () => {
    this.api.getWeather(this.lat, this.long).subscribe((data:ApiData) => {
      this.apparentTemperature = data.currently.apparentTemperature;
      this.icon = data.currently.icon;
      this.humidity = data.currently.humidity;
      console.log(data);

      console.log(`the time: ${data.currently.time}`);
      // console.log(`the alert: ${data.flags.sources[0]}`);


      // THIS IS IMPORTANT
      // I ACTUALLY WAS ABLE TO RETURN WHAT WE NEED
      // LOOK HERE
      // YAYAYAYAYAYAYAY
      this.theHour = data.hourly.data;
      console.log(`hourly: ${this.theHour[0].apparentTemperature}`);






    

      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      let date = new Date(data.currently.time * 1000);
      // Hours part from the timestamp
      let hours = date.getHours();
      // Minutes part from the timestamp
      let minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      let seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      console.log(`formatted time: ${formattedTime}`);

      // console.log(`the location is: latitude=${data.latitude}, longitude=${data.longitude}`);

      
      if (typeof this.apparentTemperature === 'number'){
        this.getOutfit();
      }

    })
    
  }

  getOutfit = () => {
    if (this.apparentTemperature >= 95){
      this.weatherType = 'very hot';
      
    } else if (this.apparentTemperature >= 80 && this.apparentTemperature <= 94){
      this.weatherType = 'hot';

    }else if (this.apparentTemperature > 69 && this.apparentTemperature <= 79){
      this.weatherType = 'warm';

      
    }else if (this.apparentTemperature > 50 && this.apparentTemperature <= 68){
      this.weatherType = 'chilly';

      
    }else if (this.apparentTemperature > 33 && this.apparentTemperature <= 49){
      this.weatherType = 'cold';

      
    }else if (this.apparentTemperature > 1 && this.apparentTemperature <= 32){
      this.weatherType = 'very cold';

      
    }else if (this.apparentTemperature < 0 ){
      this.weatherType = 'extremely cold';

      
    }

    if (typeof this.weatherType === 'string' ){
      this.getEvent();

    }
    
  }


  getEvent = () => {
    console.log(outfitMap[`${this.weatherType}:${this.eventType}`] );
    
  }


}
