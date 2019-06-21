import { Component, Input, OnInit } from '@angular/core';
import { Api } from '../services/api.services';
import { Router } from '@angular/router';
import { Skycons } from 'skycons';



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
    morningIcon: string;

    ngOnInit() {
        this.callDate();
        this.api.weather.subscribe(data => {
            console.log(data)
            this.temp = data.currently.apparentTemperature;
            this.minTemp = data.daily.data[0].apparentTemperatureLow;
            this.maxTemp = data.daily.data[0].apparentTemperatureHigh;
            this.morningIcon = data.hourly.data[0].icon;
            console.log(`this.morningIcon: ${this.morningIcon}`);
        });
    }

    getSkycon = () => {
        // by default, icons are black but you can color them
        var skycons = new Skycons({ "color": "pink" });
        // on Android, a nasty hack is needed: {"resizeClear": true}

        // If you want to add more colors :
        // var skycons = new Skycons({"monochrome": false});
        // you can now customize the color of different parts
        // main, moon, fog, fogbank, cloud, snow, leaf, rain, sun
        // var skycons = new Skycons({
        //  "monochrome": false,
        //  "colors" : {
        //    "cloud" : "#F00"
        //  }
        //  });


        // you can add a canvas by it's ID...
        skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);

        // ...or by the canvas DOM element itself.
        skycons.add(document.getElementById("icon2"), Skycons.RAIN);

        // if you're using the Forecast API, you can also supply
        // strings: "partly-cloudy-day" or "rain".

        // start animation!
        skycons.play();

        // you can also halt animation with skycons.pause()

        // want to change the icon? no problem:
        skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

        // want to remove one altogether? no problem:
        skycons.remove("icon2");
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