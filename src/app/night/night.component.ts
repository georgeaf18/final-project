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
    currentAppTemp;



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


            for (let hourCounter = 12; hourCounter < 25; hourCounter++) {
                this.currentAppTemp = this.theHour[hourCounter].apparentTemperature;
                this.afternoonTempAverage += this.currentAppTemp;
                this.afternoonTempArray.push(this.currentAppTemp);
                // co

            };
            










        });



        this.afternoonTempAverage = this.afternoonTempAverage / this.afternoonTempArray.length;

        this.afternoonMin = Math.min.apply(null, this.afternoonTempArray);
        this.afternoonMax = Math.max.apply(null, this.afternoonTempArray);



        this.afternoonTempArray.length = 0;


        this.api.updateNightAvg(this.afternoonTempAverage );


    }

    constructor(private api: Api) { }

    dateString;
    dateStringShort: string = '';
    pictureUrl = '../../assets/images/moon-cloud.png';

    timeString: string = '';
    


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