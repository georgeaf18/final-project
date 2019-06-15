import { Component } from '@angular/core';
import { Api } from './services/api.services';

// 1) Head
// 2) Face
// 3) Upper Body
// 4) Upper Body Outerwear
// 5) Lower Body
// 6) Feet


// THIS IS THE IMAGES SECTION FOR TESTING ... 
const headwear = {
  baseballCap: 'images/hat.png',
  beanie: '',
  visor: 'images/visor.jpeg'
}
const facewear = {
  glasses: '',
  sunglasses: 'images/sungalsses.png'
}
const upperbody = {
  tshirt: 'images/tshirt1.png',
  polo: 'url',
  longsleeve: 'url'
}
const upperbodyOuterwear = {
  rainJacket: 'url',
  parka: 'url'
}
const lowerbody = {
  jeans: 'url',
  chinos: 'images/pants1.png',
  shorts: 'images/shorts.jpeg',
  skirt: 'url'
}
const footwear = {
  sneakers: 'url',
  dressShoes: 'images/boott.png',
  boatShoes: 'images/quoddy.jpeg',
  heels: 'url'
}
// THIS IS THE END OF THE TESTING SECTION FOR IMAGES


const outfitMap = {

  'very_hot:casual': [headwear.visor],
  'very_hot:formal': [headwear.visor, upperbody.tshirt],
  'very_hot:bussiness_casual': [headwear.visor, upperbody.tshirt],

  'hot:casual': [headwear.visor, upperbody.tshirt],
  'hot:formal': [headwear.visor, upperbody.tshirt],
  'hot:bussiness_casual': [headwear.visor, upperbody.tshirt],

  'warm:casual': [headwear.visor, upperbody.tshirt],
  'warm:formal': [headwear.visor, upperbody.tshirt],
  'warm:bussiness_casual': [headwear.visor, upperbody.tshirt],

  'chilly:casual': 'wear a shirt, pants and tennis shoes. It\'s nice out',

  'chilly:formal': [headwear.visor, upperbody.tshirt],

  'chilly:bussiness_casual': 'chilly',

  'cold:casual': [headwear.visor, upperbody.tshirt],
  'cold:formal': [headwear.visor, upperbody.tshirt],
  'cold:bussiness_casual': [headwear.visor, upperbody.tshirt],

  'very_cold:casual': [headwear.visor, upperbody.tshirt],
  'very_cold:formal': [headwear.visor, upperbody.tshirt],
  'very_cold:bussiness_casual': [headwear.visor, upperbody.tshirt],

  'extremely_cold:casual': [headwear.visor, upperbody.tshirt],
  'extremely_cold:formal': [headwear.visor, upperbody.tshirt],
  'extremely_cold:bussiness_casual': [headwear.visor, upperbody.tshirt]

}

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
  time:number;
}

interface ApiData {
  currently: Currently;
  hourly: Hourly;
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
  theHour;

  theHour;


  urlHeadwear = [];

  constructor(private api: Api) {

  }


  // selectedDevice = 'two';
  // onChange(newValue) {
  //   console.log(newValue);
  //   this.selectedDevice = newValue;
  // ... do other stuff here ...
  // }


  // shirt1;
  // shirt2;
  // shirt3;
  // shirts = {
  //   shirt1: 'red',
  //   shirt2: 'blue',
  //   shirt3: 'green'
  // }
  // devices = 'one two three'.split(' ');




  // shirts = ['red','blue','green'];
  // selectedShirt = 'red';

  styles = ['formal', 'casual', 'bussiness_casual'];
  selectedStyle = 'casual';
  onChange = (newValue) => {
    console.log(`newValue: ${newValue}`);
    console.log(`selectedShirt before change: ${this.eventType}`);
    this.eventType = newValue;
    console.log(`selectedShirt after change: ${this.eventType}`);
    this.displayClothing(newValue);
  }

  displayClothing = (input) => {
    // if (this.selectedStyle = 'formal') {
    if (input === 'formal') {
      // console.log(`selectedStyle before change: ${this.selectedStyle}`)
      this.eventType = this.styles[0];
      console.log(`selectedStyle: ${this.eventType}`)
    // } else if (this.selectedStyle = 'casual') {
    } else if (input === 'casual') {
      // console.log(`selectedStyle before change: ${this.selectedStyle}`)
      this.eventType = this.styles[1];
      console.log(`selectedStyle: ${this.eventType}`)
    // } else if (this.selectedStyle = 'party') {
    } else if (input === 'party') {
      // console.log(`selectedStyle before change: ${this.selectedStyle}`)
      this.eventType = this.styles[2];
      console.log(`selectedStyle: ${this.eventType}`)
    }
  }

  // changeEventStyle = () => {
  //   // console.log(outfitMap[`${this.weatherType}:${this.eventType}`] );
  //   this.urlHeadwear = outfitMap[`${this.weatherType}:${this.selectedStyle}`][0];
  //   console.log(this.urlHeadwear);
  // }














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
    this.api.getWeather(this.lat, this.long).subscribe((data: ApiData) => {
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


      if (typeof this.apparentTemperature === 'number') {
        this.getOutfit();
      }

    })

  }

  getOutfit = () => {
    if (this.apparentTemperature >= 95) {
      this.weatherType = 'very hot';

    } else if (this.apparentTemperature >= 80 && this.apparentTemperature <= 94) {
      this.weatherType = 'hot';

    } else if (this.apparentTemperature > 69 && this.apparentTemperature <= 79) {
      this.weatherType = 'warm';


    } else if (this.apparentTemperature > 50 && this.apparentTemperature <= 68) {
      this.weatherType = 'chilly';


    } else if (this.apparentTemperature > 33 && this.apparentTemperature <= 49) {
      this.weatherType = 'cold';


    } else if (this.apparentTemperature > 1 && this.apparentTemperature <= 32) {
      this.weatherType = 'very cold';


    } else if (this.apparentTemperature < 0) {
      this.weatherType = 'extremely cold';


    }

    if (typeof this.weatherType === 'string') {
      this.getEvent();

    }

  }


  getEvent = () => {

    // console.log(outfitMap[`${this.weatherType}:${this.eventType}`] );
    this.urlHeadwear = outfitMap[`${this.weatherType}:${this.eventType}`][0];
    console.log(this.urlHeadwear);

  }



}
