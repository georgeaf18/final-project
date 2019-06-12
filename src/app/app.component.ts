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
      
      // console.log(data);
    })
    
    this.getOutfit();
    
  }

  getOutfit = () => {
    if (this.apparentTemperature ){
      console.log('It\'s very hot');
    }
  }

}
