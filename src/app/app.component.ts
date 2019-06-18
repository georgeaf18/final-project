import { Component } from '@angular/core';
import { Api } from './services/api.services';
import { headersToString } from 'selenium-webdriver/http';

//****************************************** clothing items */
const headwear = {

  baseballCap: '',
  winterHat: 'images/hat.png',

}

const facewear = {

  sunglasses: 'images/sunglasses.png',
  scarf: ''


}

const upperbody = {

  tshirt: 'images/tshirt1.png',
  longsleeve: 'url',
  formalShirtTie: 'url',
  dressTop: 'd'

}
const upperbodyOuterwear = {

  lightJacketHoodie: 'images/Parka.png',
  raincoat: 'url',
  suitCoat: 'd',
  winterCoat: 'url'
}
const lowerbody = {
  pants: 'images/pants1.png',
  formalPants: 'url',
  shorts: 'images/shorts.jpeg',
  dressBottom: 'url'
}
const footwear = {




  tennisShoes: 'tennisShoes',
  dressShoes: 'dressShoes',
  rainBoots: 'rainBoots',
  heels: 'heels',
  winterBoots: 'winterBoot',
  flipFlops: 'FlipFlops'



}


const outfitMap = {

  //******************************** very hot */

  'very_hot:casual': {
    male: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops],
    female: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops]
  },

  'very_hot:formal': {
    male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
    female: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
  },
  'very_hot:business_casual': {
    male: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes],
    female: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.heels]
  },

  //******************************** hot */

  'hot:casual': {
    male: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops],
    female: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops]
  },
  'hot:formal': {
    male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
    female: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
  },
  'hot:business_casual': {
    male: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes],
    female: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.heels]
  },

  //******************************** warm */


  'warm:casual': {
    male: [{}, {}, upperbody.tshirt, {}, lowerbody.pants, footwear.tennisShoes],
    female: [{}, {}, upperbody.tshirt, {}, lowerbody.pants, footwear.tennisShoes]
  },
  'warm:formal': {
    male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
    female: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
  },
  'warm:business_casual': {
    male: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes],
    female: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.heels]
  },

  //******************************** chilly */


  'chilly:casual': {
    male: [{}, {}, upperbody.tshirt, upperbodyOuterwear.lightJacketHoodie, lowerbody.pants, footwear.tennisShoes],
    female: [{}, {}, upperbody.tshirt, upperbodyOuterwear.lightJacketHoodie, facewear.scarf, lowerbody.pants, footwear.tennisShoes]
  },

  'chilly:formal': {
    male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
    female: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
  },

  'chilly:business_casual': {
    male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.lightJacketHoodie, lowerbody.formalPants, footwear.dressShoes],
    female: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.lightJacketHoodie, lowerbody.formalPants, footwear.heels]
  },
  //******************************** cold */

  'cold:casual': {
    male: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
    female: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots]
  },
  'cold:formal': {
    male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes],
    female: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes]
  },
  'cold:business_casual': {
    male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots],
    female: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots]
  },

  //******************************** very cold*/


  'very_cold:casual': {
    male: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
    female: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots]
  },
  'very_cold:formal': {
    male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes],
    female: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes]
  },
  'very_cold:business_casual': {
    male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots],
    female: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots]
  },

  //******************************** extremely cold */


  'extremely_cold:casual': {
    male: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
    female: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, , lowerbody.pants, footwear.winterBoots]
  },
  'extremely_cold:formal': {
    male: [headwear.winterHat, facewear.scarf, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
    female: [headwear.winterHat, facewear.scarf, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
  },
  'extremely_cold:business_casual': {
    male: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
    female: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots]
  }

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
  time: number;
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
  preEvent: number = 1;


  headwearUrl;
  facewearUrl;
  upperbodyUrl;
  upperbodyOuterUrl;
  lowerbodyUrl;
  footwearUrl;
  

  gender: string = 'male';





  constructor(private api: Api) {

  }

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

      // will get the outfit once the temperature is on hand
      if (typeof this.apparentTemperature === 'number') {
        this.getOutfit();
        console.log(this.apparentTemperature);


      }

    })

  }



  //******************** returns a weather type depending the temperature ********************/

  getOutfit = () => {
    if (this.apparentTemperature >= 95) {
      this.weatherType = 'very hot';
      console.log('works');


    } else if (this.apparentTemperature >= 80 && this.apparentTemperature <= 94) {
      this.weatherType = 'hot';
      console.log('works');


    } else if (this.apparentTemperature > 69 && this.apparentTemperature <= 79) {
      this.weatherType = 'warm';
      console.log('works');



    } else if (this.apparentTemperature > 50 && this.apparentTemperature <= 68) {
      this.weatherType = 'chilly';
      console.log('works');



    } else if (this.apparentTemperature > 33 && this.apparentTemperature <= 49) {
      this.weatherType = 'cold';
      console.log('works');



    } else if (this.apparentTemperature > 1 && this.apparentTemperature <= 32) {
      this.weatherType = 'very cold';


    } else if (this.apparentTemperature < 0) {
      this.weatherType = 'extremely cold';


    }


    if (typeof this.weatherType === 'string') {
      this.getOutfitUrl();

    }

  }


  getOutfitUrl = () => {


    // console.log(outfitMap[`${this.weatherType}:${this.eventType}`] );
    this.headwearUrl = outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][0];
    this.facewearUrl = outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][1];
    this.upperbodyUrl = outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][2];
    this.upperbodyOuterUrl = outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][3];
    this.lowerbodyUrl = outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][4];
    this.footwearUrl = outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][5];
    console.log(this.headwearUrl);
    console.log("TCL: getEvent -> this.facewearUrl", this.facewearUrl)
    console.log("TCL: getEvent -> this.upperbodyUrl", this.upperbodyUrl)
    console.log("TCL: getEvent -> this.upperbodyOuterUrl", this.upperbodyOuterUrl)
    console.log("TCL: getEvent -> this.lowerbodyUrl", this.lowerbodyUrl)
    console.log("TCL: getEvent -> this.footwearUrl", this.footwearUrl)

  }

  setMale = () => {
    this.gender = 'male';
    this.getLocation();
  };

  setFemale = () => {
    this.gender = 'female';
    this.getLocation();
  };

  setFormal = () => {
    this.eventType = 'formal';
    this.getLocation();
  }

  setBusinessCasual = () => {
    this.eventType = 'business_casual';
    this.getLocation();

  }

  setCasual = () => {
    this.eventType = 'casual';
    this.getLocation();

  }

  getEvent = () => {
    console.log(this.preEvent);
    if (this.preEvent === 1) {
      this.eventType = 'casual';
    } else if (this.preEvent === 2) {
      this.eventType = 'business_casual';
    } else if (this.preEvent === 3) {
      this.eventType = 'formal';
    }
  }


}
