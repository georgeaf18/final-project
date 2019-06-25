import { Component, Input, OnInit } from '@angular/core';
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

    littleTimeout() {
        setTimeout(() => {
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

            this.morningMin = Math.min.apply(null, this.morningTempArray);
            this.morningMax = Math.max.apply(null, this.morningTempArray);
            console.log(this.morningMin);
            console.log(this.morningMax);
            console.log(this.morningTempArray.length)
            console.log(`this.morningTempAverage: ${this.morningTempAverage}`);






            // for (hourCounter = 12; hourCounter < 25; hourCounter++) {
            //     let currentAppTemp = this.theHour[hourCounter].apparentTemperature;
            //     this.afternoonTempAverage += currentAppTemp;
            //     this.afternoonTempArray.push(currentAppTemp);
            //     console.log(currentAppTemp);
            //     this.afternoonTempAverage = this.afternoonTempAverage / this.afternoonTempArray.length;

            //     this.afternoonMin = Math.min.apply(null, this.afternoonTempArray);
            //     this.afternoonMax = Math.max.apply(null, this.afternoonTempArray);
            // };
            // console.log(`this.afternoonTempAverage: ${this.afternoonTempAverage}`);
            // console.log(this.afternoonMin);
            // console.log(this.afternoonMax);
            // console.log(`this.afternoonTempArray: ${this.afternoonTempArray}`);
            // console.log(`this.afternoonTempAverage: ${this.afternoonTempAverage}`);
        });

        }, 500);   
    }

    ngOnInit() {
        this.littleTimeout();
    }

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



    // @Input() lowTemp:number;
    // @Input() highTemp:number;
    // @Input() apparentTemperature:number;
    // @Input() realTemp:number;


    // @Input() theHour;
    // @Input() morningTempArray = [];
    // @Input() morningTempAverage:number;
    // @Input() morningMin;
    // @Input() morningMax;
    // @Input() afternoonTempArray = [];
    // @Input() afternoonTempAverage: number;
    // @Input() afternoonMin;
    // @Input() afternoonMax;


}