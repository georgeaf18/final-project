import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Api } from '../services/api.services';




@Component({
    selector: 'daytime-component',
    templateUrl: './daytime.component.html',
    styleUrls: ['./daytime.component.css']
})

export class DaytimeComponent {
    title = 'final-project';

    temp: number;
    minTemp: number;
    maxTemp: number;
    icon: string;


    lowTemp;
    highTemp;
    realTemp;

    theHour;
    morningTempArray = [];
    morningTempAverage: number = 0;
    morningMin;
    morningMax;
    afternoonTempArray = [];
    afternoonTempAverage: number = 0;
    afternoonMin;
    afternoonMax;

    constructor(private api: Api) { }


    dateString;
    pictureUrl = '../../assets/images/sun-pic.png';

    ngOnInit() {
        this.littleTimeout();
    }

    littleTimeout() {
        setTimeout(() => {
            this.callDate();
        this.api.weather.subscribe(data => {
            this.temp = data.currently.apparentTemperature;
            this.minTemp = data.daily.data[0].apparentTemperatureLow;
            this.maxTemp = data.daily.data[0].apparentTemperatureHigh;
            this.icon = data.currently.icon;



            // Makes the correct temperature display 
            // for both morning and night ... i use a day and night array
            // of averages for the morning and afternoon times when the 
            // user will likely be experiencing the weather (before and 
            // after work)
            this.theHour = data.hourly.data;
            
            for ( let hourCounter = 5; hourCounter < 12; hourCounter++) {
                let currentAppTemp = this.theHour[hourCounter].apparentTemperature;
                this.morningTempAverage += currentAppTemp;
                this.morningTempArray.push(currentAppTemp);
            };
            this.morningTempAverage = this.morningTempAverage / this.morningTempArray.length;

            this.morningMin = Math.min.apply(null, this.morningTempArray);
            this.morningMax = Math.max.apply(null, this.morningTempArray);
           


            this.morningTempArray.length = 0;

        });

        }, 800);   
    }


    private _callDate = () => {
        let now = new Date();
        this.dateString = now;
    };
    public get callDate() {
        return this._callDate;
    }
    public set callDate(value) {
        this._callDate = value;
    }

}