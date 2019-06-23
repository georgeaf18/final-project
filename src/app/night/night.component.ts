import { Component, Input, OnInit } from '@angular/core';
import { Api } from '../services/api.services';
import { Router } from '@angular/router';




@Component({
    selector: 'night-component',
    templateUrl: './night.component.html',
    styleUrls: ['./night.component.css']
})

export class NightComponent {
    title = 'final-project';

    temp: number;
    minTemp: number;
    maxTemp: number;

    // <! copied in from app.component.ts
    lowTemp;
    highTemp;
    realTemp;

    theHour;
    // currentAppTemp: number;
    morningTempArray = [];
    morningTempAverage: number = 0;
    morningMin;
    morningMax;
    afternoonTempArray = [];
    afternoonTempAverage: number = 0;
    afternoonMin;
    afternoonMax;
    


    ngOnInit() {
        this.callDate();
        this.api.weather.subscribe(data => {
            console.log(data)
            this.temp = data.currently.apparentTemperature;
            this.minTemp = data.daily.data[0].apparentTemperatureLow;
            this.maxTemp = data.daily.data[0].apparentTemperatureHigh;


            // Holden's addition to make the correct temperature display 
            // for both morning and night ... i use a day and night array
            // of averages for the morning and afternoon times when the 
            // user will likely be experiencing the weather (before and 
            // after work)
            this.theHour = data.hourly.data;
            let hourCounter: number;
            for (hourCounter = 5; hourCounter < 12; hourCounter++) {
              let currentAppTemp = this.theHour[hourCounter].apparentTemperature;
              this.morningTempAverage += currentAppTemp;
              this.morningTempArray.push(currentAppTemp);
              console.log(currentAppTemp);
            };
            console.log(`this.morningTempAverage: ${this.morningTempAverage}`);
            this.morningTempAverage = this.morningTempAverage / this.morningTempArray.length;
            for (hourCounter = 12; hourCounter < 25; hourCounter++) {
              let currentAppTemp = this.theHour[hourCounter].apparentTemperature;
              this.afternoonTempAverage += currentAppTemp;
              this.afternoonTempArray.push(currentAppTemp);
              console.log(currentAppTemp);
            };
            this.afternoonTempAverage = this.afternoonTempAverage / this.afternoonTempArray.length;
            console.log(`this.morningTempArray: ${this.morningTempArray}`);
            this.morningMin = Math.min.apply(null, this.morningTempArray);
            this.morningMax = Math.max.apply(null, this.morningTempArray);
            console.log(this.morningMin);
            console.log(this.morningMax);
            console.log(this.morningTempArray.length)
            console.log(`this.morningTempAverage: ${this.morningTempAverage}`);
    
            console.log(`this.afternoonTempArray: ${this.afternoonTempArray}`);
            console.log(this.afternoonTempArray.length)
            console.log(`this.afternoonTempAverage: ${this.afternoonTempAverage}`);
            this.afternoonMin = Math.min.apply(null, this.afternoonTempArray);
            this.afternoonMax = Math.max.apply(null, this.afternoonTempArray);
            console.log(this.afternoonMin);
            console.log(this.afternoonMax);
        });
        

// !> end of copied over from app.component.ts



    }

    constructor(private api: Api) { }

    dateString;
    dateStringShort: string = '';
    pictureUrl = '../../assets/images/moon-cloud.png';

    timeString: string = '';
    callDate = () => {
        let now = new Date();
        this.dateString = now;
        console.log(`now: ${now}`);
    }
    // callDate = () => {
    //     let now = new Date();
    //     this.dateString = now.toISOString();
    //     console.log(this.dateString);
    //     let i;
    //     for (i = 0; i < 10; i++) {
    //         this.dateStringShort += this.dateString[i];
    //     };
    //     console.log(`this.dateStringShort: ${this.dateStringShort}`);
    //     console.log(`this.dateStringShort[-1]: ${this.dateStringShort[this.dateStringShort.length - 1]}`)

    //     let timeStringShort: string = '';
    //     for (i = 11; i < 13; i++) {
    //         this.timeString = now.toISOString();
    //         timeStringShort += this.timeString[i];

    //         console.log(`this.timeString[i]: ${this.timeString[i]}`);
    //     }
    //     console.log(`this.timeString: ${this.timeString}`);
    //     console.log(`timeStringShort: ${timeStringShort}`);
    //     let timeStringNumber = parseInt(timeStringShort);
    //     if (timeStringNumber >= 20 || timeStringNumber <= 4) {
    //         let newTimeString: string = '';
    //         let lastNumberOfDate = parseInt(this.dateStringShort[this.dateStringShort.length - 1]);
    //         let changeLastNumberOfDate = lastNumberOfDate - 1;
    //         changeLastNumberOfDate.toString();
    //         for (i = 0; i < this.dateStringShort.length - 1; i++) {
    //             newTimeString += this.dateStringShort[i];
    //             console.log(newTimeString);
    //         }
    //         newTimeString += changeLastNumberOfDate;
    //         newTimeString += 'T00:00:00';
    //         console.log(`newTimeString: ${newTimeString}`);
    //         this.dateStringShort = newTimeString;


    //         // let changeLastNumber = parseInt(this.dateStringShort[this.dateStringShort.length-1]);
    //         // console.log(`changeLastNumber: ${changeLastNumber}`);
    //         // changeLastNumber -= 1;
    //         // console.log(`changeLastNumber: ${changeLastNumber}`);
    //         // changeLastNumber.toString();
    //         // this.dateStringShort = this.dateStringShort.slice(changeLastNumber,this.dateStringShort.length-1);
    //     }

    //     console.log(`this.dateStringShort: ${this.dateStringShort}`);
    //     console.log(typeof this.dateStringShort);

    // }


    @Input() lowTemp: number;
    @Input() highTemp: number;
    @Input() apparentTemperature: number;
    @Input() realTemp: number;


    @Input() theHour;
    @Input() morningTempArray = [];
    @Input() morningTempAverage: number;
    @Input() morningMin;
    @Input() morningMax;
    @Input() afternoonTempArray = [];
    @Input() afternoonTempAverage: number;
    @Input() afternoonMin;
    @Input() afternoonMax;




}