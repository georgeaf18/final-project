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

    ngOnInit() {
        this.callDate();
       this.api.weather.subscribe(data => {
           console.log(data)
           this.temp = data.currently.apparentTemperature;
           this.minTemp = data.daily.data[0].apparentTemperatureLow;
           this.maxTemp = data.daily.data[0].apparentTemperatureHigh;
           this.icon = data.currently.icon;

       });
    }

    constructor(private api: Api) { }


    dateString;
    pictureUrl = '../../assets/images/sun-pic.png';

    callDate = () => {
        let now = new Date();
        this.dateString = now; 
        console.log(`now: ${now}`);

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