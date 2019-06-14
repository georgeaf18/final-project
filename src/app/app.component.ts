import { Component } from '@angular/core';
import { Api } from './services/api.services';
import { headersToString } from 'selenium-webdriver/http';

//****************************************** clothing items */

const headwear = {

  baseballCap: 'd',
  winterHat: 'data:image/jpeg;base64,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',

}

const facewear = {

  sunglasses: 'd',
  scarf: 'd'

}

const upperbody = {

  tshirt: 'images/tshirt.jpeg',
  longsleeve: 'url',
  formalShirtTie: 'url',
  dressTop: 'd'

}
const upperbodyOuterwear = {
  lightJacketHoodie: 'd',
  raincoat: 'url',
  suitCoat: 'd',
  winterCoat: 'url'
}
const lowerbody = {
  pants: 'url',
  formalPants: 'url',
  shorts: 'images/shorts.jpeg',
  dressBottom: 'url'
}
const footwear = {

  tennisShoes: 'url',
  dressShoes: 'url',
  rainBoots: 'images/quoddy.jpeg',
  heels: 'url',
  winterBoots: 'd',
  flipFlops: 'd'

}

const outfitMap = {

//******************************** very hot */


  'very_hot:casual': {
   male: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops ],
   female:[headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops]
  },

  'very_hot:formal': {
    male: [ {}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat ,lowerbody.formalPants, footwear.dressShoes ],
    female:[ {}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat ,lowerbody.formalPants, footwear.heels]
   },
  'very_hot:bussiness_casual': {
    male: [ {},{}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes ],
    female:[ {},{}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.heels]
   },

//******************************** hot */

  'hot:casual': {
   male: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops ],
   female:[headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops]
  },
  'hot:formal': {
    male: [ {}, {},upperbody.formalShirtTie, upperbodyOuterwear.suitCoat ,lowerbody.formalPants, footwear.dressShoes ],
    female:[ {},{},upperbody.formalShirtTie, upperbodyOuterwear.suitCoat ,lowerbody.formalPants, footwear.heels]
   },
  'hot:bussiness_casual': {
    male: [ {},{}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes ],
    female:[{},{}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.heels]
   },

//******************************** warm */


  'warm:casual': {
    male: [ {},{}, upperbody.tshirt, {}, lowerbody.pants, footwear.tennisShoes ],
    female:[ {},{},upperbody.tshirt, {}, lowerbody.pants, footwear.tennisShoes]
   },
  'warm:formal': {
    male: [ {},{}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat , lowerbody.formalPants, footwear.dressShoes ],
    female:[ {},{},upperbody.formalShirtTie, upperbodyOuterwear.suitCoat , lowerbody.formalPants, footwear.heels]
   },
  'warm:bussiness_casual': {
    male: [  {},{},upperbody.formalShirtTie,{}, lowerbody.formalPants, footwear.dressShoes ],
    female:[ {},{},upperbody.formalShirtTie,{}, lowerbody.formalPants, footwear.heels]
   },

//******************************** chilly */


  'chilly:casual': {
    male: [  {},{}, upperbody.tshirt, upperbodyOuterwear.lightJacketHoodie, lowerbody.pants, footwear.tennisShoes ],
    female:[ {},{}, upperbody.tshirt, upperbodyOuterwear.lightJacketHoodie, facewear.scarf, lowerbody.pants, footwear.tennisShoes]
   },

  'chilly:formal': {
    male: [ {},{}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat , lowerbody.formalPants, footwear.dressShoes ],
    female:[  {},{}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat , lowerbody.formalPants, footwear.heels]
   },

  'chilly:bussiness_casual': {
    male: [ {},{}, upperbody.formalShirtTie, upperbodyOuterwear.lightJacketHoodie , lowerbody.formalPants, footwear.dressShoes ],
    female:[{},{}, upperbody.formalShirtTie, upperbodyOuterwear.lightJacketHoodie , lowerbody.formalPants, footwear.heels]
   },
//******************************** cold */

  'cold:casual': {
    male: [  headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat,  lowerbody.pants, footwear.winterBoots ],
    female:[ headwear.winterHat,facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat,  lowerbody.pants, footwear.winterBoots]
   },
  'cold:formal': {
    male: [ {},{}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat , lowerbody.formalPants, footwear.dressShoes ],
    female:[{},{}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat , lowerbody.formalPants, footwear.dressShoes]
   },
  'cold:bussiness_casual': {
    male: [ {},{}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat , lowerbody.formalPants, footwear.winterBoots ],
    female:[{},{}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat , lowerbody.formalPants, footwear.winterBoots]
   },

//******************************** very cold*/


  'very_cold:casual': {
    male: [  headwear.winterHat,facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots ],
    female:[ headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat,  lowerbody.pants, footwear.winterBoots]
   },
  'very_cold:formal': {
    male: [ {},{}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat , lowerbody.formalPants, footwear.dressShoes ],
    female:[{},{}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat , lowerbody.formalPants, footwear.dressShoes]
   },
  'very_cold:bussiness_casual': {
    male: [ {},{}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat , lowerbody.formalPants, footwear.winterBoots ],
    female:[{},{}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat , lowerbody.formalPants, footwear.winterBoots]
   },

//******************************** extremely cold */
  

  'extremely_cold:casual': {
    male: [  headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat,  lowerbody.pants, footwear.winterBoots ],
    female:[ headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, , lowerbody.pants, footwear.winterBoots]
   },
  'extremely_cold:formal': {
    male: [ headwear.winterHat, facewear.scarf, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat,  lowerbody.formalPants, footwear.dressShoes ],
    female:[ headwear.winterHat, facewear.scarf, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat,  lowerbody.formalPants, footwear.heels]
   },
  'extremely_cold:bussiness_casual': {
    male: [  headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat,  lowerbody.pants, footwear.winterBoots ],
    female:[ headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat,  lowerbody.pants, footwear.winterBoots]
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

  headwearUrl;
  facewearUrl;
  upperbodyUrl;
  upperbodyOuterUrl;
  lowerbodyUrl;
  footwearUrl;
  
  gender: string = 'male';




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















//******************************** */ 

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


  
  //******************** returns a weather type depending the temperature ********************/

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



}
