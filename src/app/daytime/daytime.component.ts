import { Component, Input, OnInit } from '@angular/core';
import { Api } from '../services/api.services';



@Component({
    selector: 'daytime-component',
    templateUrl: './daytime.component.html',
    styleUrls: ['./daytime.component.css']
})

export class DaytimeComponent {
    title = 'final-project';

    ngOnInit() {
        this.callDate();
    }

    constructor(private api: Api) { }

    dateString;
    pictureUrl = '../../assets/images/sun-pic.png';

    callDate = () => {
        let now = new Date();
        this.dateString = now; 
        console.log(`now: ${now}`);

    }

    @Input() lowTemp:number;
    @Input() highTemp:number;
    @Input() apparentTemperature:number;
    @Input() realTemp:number;

    @Input() fullDayArray: [];
    
    // hourReturn = () => {
    //     console.log(`this.fullDayArray IN THE DAYTIME COMPONENT: ${this.fullDayArray}`);
    //     // let nineAM = this.fullDayArray[5]
    // };
    

    @Input() theHour;
    @Input() morningTempArray = [];
    @Input() morningTempAverage:number;
    @Input() morningMin;
    @Input() morningMax;
    @Input() afternoonTempArray = [];
    @Input() afternoonTempAverage: number;
    @Input() afternoonMin;
    @Input() afternoonMax;


}