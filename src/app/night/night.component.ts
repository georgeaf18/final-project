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
    icon: string;

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
    afternoonMin: number = 0;
    afternoonMax: number = 0;



    ngOnInit() {
        this.callDate();
        this.api.weather.subscribe(data => {
            console.log(data)
            this.temp = data.currently.apparentTemperature;
            this.minTemp = data.daily.data[0].apparentTemperatureLow;
            this.maxTemp = data.daily.data[0].apparentTemperatureHigh;
            this.icon = data.currently.icon;
            


            // Holden's addition to make the correct temperature display 
            // for both morning and night ... i use a day and night array
            // of averages for the morning and afternoon times when the 
            // user will likely be experiencing the weather (before and 
            // after work)
            this.theHour = data.hourly.data;
            let hourCounter: number;
            for (hourCounter = 12; hourCounter < 25; hourCounter++) {
                let currentAppTemp = this.theHour[hourCounter].apparentTemperature;
                this.afternoonTempAverage += currentAppTemp;
                this.afternoonTempArray.push(currentAppTemp);
                // console.log(`currentAppTemp: ${currentAppTemp}`);
                // console.log(`this.afternoonTempAverage: ${this.afternoonTempAverage}`);
                // console.log(`this.afternoonTempArray: ${this.afternoonTempArray}`);
                if (currentAppTemp > Math.max.apply(null, this.afternoonTempArray)) {
                    this.afternoonMax = currentAppTemp;
                } 
                if (currentAppTemp < Math.min.apply(null, this.afternoonTempArray)) {
                    this.afternoonMin = currentAppTemp;
                }
                // console.log(`this.afternoonMax: ${this.afternoonMax}`);
                // console.log(`this.afternoonMin: ${this.afternoonMin}`);
                this.afternoonMin = Math.min.apply(null, this.afternoonTempArray);
                this.afternoonMax = Math.max.apply(null, this.afternoonTempArray);
                // console.log(`this.afternoonMax: ${this.afternoonMax}`);
                // console.log(`this.afternoonMin: ${this.afternoonMin}`);
                // console.log(`this.afternoonTempAverage: ${this.afternoonTempAverage}`);
                this.afternoonTempAverage = this.afternoonTempAverage / this.afternoonTempArray.length;



                this.afternoonTempArray.length = 0;
                
                this.api.updateNightAvg(this.afternoonTempAverage/12);


            };

            // this.afternoonMin = Math.min.apply(null, this.afternoonTempArray);
            // this.afternoonMax = Math.max.apply(null, this.afternoonTempArray);




            



            // for (hourCounter = 5; hourCounter < 12; hourCounter++) {
            //     let currentAppTemp = this.theHour[hourCounter].apparentTemperature;
            //     this.morningTempAverage += currentAppTemp;
            //     this.morningTempArray.push(currentAppTemp);
            //     console.log(currentAppTemp);
            // };
            // console.log(`this.morningTempAverage: ${this.morningTempAverage}`);
            // this.morningTempAverage = this.morningTempAverage / this.morningTempArray.length;

            // this.morningMin = Math.min.apply(null, this.morningTempArray);
            // this.morningMax = Math.max.apply(null, this.morningTempArray);
            // console.log(this.morningMin);
            // console.log(this.morningMax);
            // console.log(this.morningTempArray.length)
            // console.log(`this.morningTempAverage: ${this.morningTempAverage}`);







        });


        // !> end of copied over from app.component.ts



    }

    constructor(private api: Api) { }

    dateString;
    dateStringShort: string = '';
    pictureUrl = '../../assets/images/moon-cloud.png';

    timeString: string = '';
    // callDate = () => {
    //     let now = new Date();
    //     this.dateString = now;
    //     console.log(`now: ${now}`);
    // }


    private _callDate = () => {
        let now = new Date();
        this.dateString = now;
        console.log(`now: ${now}`);
    };
    public get callDate() {
        return this._callDate;
    }
    public set callDate(value) {
        this._callDate = value;
    }

    



}