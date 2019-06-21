// import { Component, OnInit, Input } from '@angular/core';
// import { Api } from '../services/api.services';
// import { getLocaleDateFormat } from '@angular/common';

// //****************************************** clothing items */
// const headwear = {
//     baseballCap: 'clothes/head/baseballCap.png',
//     winterHat: 'clothes/head/winterHat.png',
// }

// const facewear = {
//     sunglasses: 'clothes/face/sunglasses.png',
//     scarf: 'clothes/face/scarf.png'
// }

// const upperbody = {
//     tshirt: 'clothes/upper-body/tshirt.png',
//     longsleeve: 'clothes/upper-body/longsleeve.png',
//     formalShirtTie: 'clothes/upper-body/formalShirtTie.png',
//     dressTop: 'clothes/upper-body/dressTop.png'
// }

// const upperbodyOuterwear = {
//     lightJacketHoodie: 'clothes/upper-body-outer-layer/lightJacketHoodie.png',
//     raincoat: 'clothes/upper-body-outer-layer/raincoat.png',
//     shawl: 'clothes/upper-body-outer-layer/shawl.png',
//     suitCoat: 'clothes/upper-body-outer-layer/suitCoat.png',
//     winterCoat: 'clothes/upper-body-outer-layer/winterCoat.png'
// }

// const lowerbody = {
//     pants: 'clothes/lower-body/pants.png',
//     formalPants: 'clothes/lower-body/formalPants.png',
//     shorts: 'clothes/lower-body/shorts.png',
//     dressBottom: 'clothes/lower-body/dressBottoms.png'
// }

// const footwear = {
//     tennisShoes: 'clothes/feet/tennisShoes.png',
//     dressShoes: 'clothes/feet/dressShoes.png',
//     rainBoots: 'clothes/feet/rainBoots.png',
//     heels: 'clothes/feet/heels.png',
//     winterBoots: 'clothes/feet/snowBoots.png',
//     flipFlops: 'clothes/feet/flipFlops.png'
// }

// const outfitMap = {
//     //******************************** very hot */
//     'very_hot:casual': {
//         male: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops],
//         female: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops]
//     },
//     'very_hot:formal': {
//         male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
//         female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
//     },
//     'very_hot:business_casual': {
//         male: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes],
//         female: [{}, {}, upperbody.dressTop, {}, lowerbody.formalPants, footwear.heels]
//     },

//     //******************************** hot */
//     'hot:casual': {
//         male: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops],
//         female: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops]
//     },
//     'hot:formal': {
//         male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
//         female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
//     },
//     'hot:business_casual': {
//         male: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes],
//         female: [{}, {}, upperbody.dressTop, {}, lowerbody.formalPants, footwear.heels]
//     },

//     //******************************** warm */
//     'warm:casual': {
//         male: [{}, {}, upperbody.tshirt, {}, lowerbody.pants, footwear.tennisShoes],
//         female: [{}, {}, upperbody.tshirt, {}, lowerbody.pants, footwear.tennisShoes]
//     },
//     'warm:formal': {
//         male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
//         female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
//     },
//     'warm:business_casual': {
//         male: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes],
//         female: [{}, {}, upperbody.dressTop, {}, lowerbody.formalPants, footwear.heels]
//     },

//     //******************************** chilly */
//     'chilly:casual': {
//         male: [{}, {}, upperbody.tshirt, upperbodyOuterwear.lightJacketHoodie, lowerbody.pants, footwear.tennisShoes],
//         female: [{}, {}, upperbody.tshirt, upperbodyOuterwear.lightJacketHoodie, facewear.scarf, lowerbody.pants, footwear.tennisShoes]
//     },
//     'chilly:formal': {
//         male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
//         female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
//     },
//     'chilly:business_casual': {
//         male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.lightJacketHoodie, lowerbody.formalPants, footwear.dressShoes],
//         female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.lightJacketHoodie, lowerbody.formalPants, footwear.heels]
//     },

//     //******************************** cold */
//     'cold:casual': {
//         male: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
//         female: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots]
//     },
//     'cold:formal': {
//         male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes],
//         female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes]
//     },
//     'cold:business_casual': {
//         male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots],
//         female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots]
//     },

//     //******************************** very cold*/
//     'very_cold:casual': {
//         male: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
//         female: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots]
//     },
//     'very_cold:formal': {
//         male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes],
//         female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes]
//     },
//     'very_cold:business_casual': {
//         male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots],
//         female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots]
//     },

//     //******************************** extremely cold */
//     'extremely_cold:casual': {
//         male: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
//         female: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, , lowerbody.pants, footwear.winterBoots]
//     },
//     'extremely_cold:formal': {
//         male: [headwear.winterHat, facewear.scarf, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
//         female: [headwear.winterHat, facewear.scarf, upperbody.dressTop, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
//     },
//     'extremely_cold:business_casual': {
//         male: [headwear.winterHat, facewear.scarf, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
//         female: [headwear.winterHat, facewear.scarf, upperbody.dressTop, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots]
//     }
// }



// interface Hourly {
//     data;
//     apparentTemperature: number;
//     humidity: number;
//     icon: string;
//     precipProbability: number;
//     summary: string;
//     temperature: number;
//     time: number;
//     windSpeed: number;
// }

// interface Currently {
//     apparentTemperature: number;
//     icon: string;
//     humidity: number;
//     time: number;
//     temperature: number;
// }

// interface Daily {
//     data;
// }

// interface ApiData {
//     currently: Currently;
//     hourly: Hourly;
//     daily: Daily;
// }

// @Component({
//     selector: 'mannequin',
//     templateUrl: './mannequin.component.html',
//     styleUrls: ['./mannequin.component.css']
// })

// export class MannequinComponent {
//     title = 'final-project';

//     currently;
//     icon;
//     humidity;
//     lat: number;
//     long: number;
//     weatherType: string;
//     eventType: string = 'casual';
//     preEvent: number = 1;

//     headwearUrl;
//     facewearUrl;
//     upperbodyUrl;
//     upperbodyOuterUrl;
//     lowerbodyUrl;
//     footwearUrl;

//     showHeadwear: boolean = false;
//     showFacewear: boolean = false;
//     showUpperbody: boolean = false;
//     showUpperbodyOuter: boolean = false;
//     showLowerbody: boolean = false;
//     showFootwear: boolean = false;


//     gender: string = 'male';


//     // ngOnInit() {
//     //     this.getLocation();
//     // }


//     constructor(private api: Api) {}

//     @Input() morningTempAverage: number;
//     @Input() afternoonTempAverage: number;
//     // @Input() apparentTemperature: number;
//     apparentTemperature;


//     //******************************** get location through navigator's geolocation function */ 

//     getLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(this.sendLocation);
//         }
//         // console.log(`this.morningTempAverage OMG LOOK HERE BITCH:${this.morningTempAverage}`);
//     }

//     sendLocation = (position) => {
//         this.lat = position.coords.latitude;
//         this.long = position.coords.longitude;
//         this.getData();
//     }
//     //******************************** gets data from Dark Sky api  */ 




//     getData = () => {
//         this.api.getWeather(this.lat, this.long).subscribe((data: ApiData) => {

//             this.apparentTemperature = data.currently.apparentTemperature;
//             console.log(`this.apparentTemperature:${this.apparentTemperature}`);
//             // console.log(typeof this.apparentTemperature);
//         }
//         )
//         this.getOutfit();
//         // will get the outfit once the temperature is on hand
//         // if (typeof this.apparentTemperature == 'number') {
//         //     // this.getOutfit();
//         //     console.log(`this.apparentTemperature YOOOOOOOOOOOOOO #2:${this.apparentTemperature}`);
//         // }
//     }
//     //******************** returns a weather type depending the temperature ********************/

//     getOutfit = () => {
//         console.log('the getOutfit() was called');
//         if (this.apparentTemperature >= 95) {
//             this.weatherType = 'very hot';
//             // console.log('works');


//         } else if (this.apparentTemperature >= 80 && this.apparentTemperature <= 94) {
//             this.weatherType = 'hot';
//             // console.log('works');


//         } else if (this.apparentTemperature > 69 && this.apparentTemperature <= 79) {
//             this.weatherType = 'warm';
//             // console.log('works');



//         } else if (this.apparentTemperature > 50 && this.apparentTemperature <= 68) {
//             this.weatherType = 'chilly';
//             // console.log('works');
//             console.log(`this.weatherType: ${this.weatherType}`);



//         } else if (this.apparentTemperature > 33 && this.apparentTemperature <= 49) {
//             this.weatherType = 'cold';
//             // console.log('works');



//         } else if (this.apparentTemperature > 1 && this.apparentTemperature <= 32) {
//             this.weatherType = 'very cold';


//         } else if (this.apparentTemperature < 0) {
//             this.weatherType = 'extremely cold';


//         }


//         // if (typeof this.weatherType === 'string') {
//         //     this.getOutfitUrl();

//         // }
//         this.getOutfitUrl();

//     }


//     getOutfitUrl = () => {

//         //this is assigning the correct images to the variables based on the gender, event type and weather
//         this.headwearUrl = this.outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][0];
//         this.facewearUrl = this.outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][1];
//         this.upperbodyUrl = this.outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][2];
//         this.upperbodyOuterUrl = this.outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][3];
//         this.lowerbodyUrl = this.outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][4];
//         this.footwearUrl = this.outfitMap[`${this.weatherType}:${this.eventType}`][this.gender][5];

//         // this is making the pictures show if they not of type object which means they're holding a img url
//         if (typeof this.headwearUrl !== 'object') {
//             this.showHeadwear = true;

//         }

//         if (typeof this.facewearUrl !== 'object') {
//             this.showFacewear = true;

//         }

//         if (typeof this.upperbodyUrl !== 'object') {
//             this.showUpperbody = true;

//         }

//         if (typeof this.upperbodyOuterUrl !== 'object') {
//             this.showUpperbodyOuter = true;

//         }

//         if (typeof this.lowerbodyUrl !== 'object') {
//             this.showLowerbody = true;

//         }

//         if (typeof this.footwearUrl !== 'object') {
//             this.showFootwear = true;
//         }

//         console.log(`this.headwearUrl LOOK HERE FOR THE HEADWEAR:${this.headwearUrl}`);
//         console.log("TCL: getEvent -> this.facewearUrl", this.facewearUrl)
//         console.log("TCL: getEvent -> this.upperbodyUrl", this.upperbodyUrl)
//         console.log("TCL: getEvent -> this.upperbodyOuterUrl", this.upperbodyOuterUrl)
//         console.log("TCL: getEvent -> this.lowerbodyUrl", this.lowerbodyUrl)
//         console.log("TCL: getEvent -> this.footwearUrl", this.footwearUrl)

//     }

//     setMale = () => {
//         this.gender = 'male';
//         this.getLocation();
//     };

//     setFemale = () => {
//         this.gender = 'female';
//         this.getLocation();
//     };

//     setFormal = () => {
//         this.eventType = 'formal';
//         this.getLocation();
//     }

//     setBusinessCasual = () => {
//         this.eventType = 'business_casual';
//         this.getLocation();

//     }

//     setCasual = () => {
//         this.eventType = 'casual';
//         this.getLocation();

//     }

//     getEvent = () => {
//         if (this.preEvent === 1) {
//             this.eventType = 'casual';
//             this.getLocation();

//         } else if (this.preEvent === 2) {
//             this.eventType = 'business_casual';
//             this.getLocation();

//         } else if (this.preEvent === 3) {
//             this.eventType = 'formal';
//             this.getLocation();

//         }
//     }








// }