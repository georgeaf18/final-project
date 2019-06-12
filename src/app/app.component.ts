import { Component } from '@angular/core';
import {Api} from './services/api.services';

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

    if ( this.weatherType === 'warm' && this.eventType === 'casual'){
      console.log('wear a shirt, pants and tennis shoes. It\'s nice out');
    } else if ( this.weatherType === 'chilly' && this.eventType === 'casual'){
        console.log('wear a jacket, a shirt, pants and tennis shoes. It\'s chilly');
      }
  }

}
