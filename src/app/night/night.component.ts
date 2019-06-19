import { Component, Input, OnInit } from '@angular/core';
import { Api } from '../services/api.services';



@Component({
    selector: 'night-component',
    templateUrl: './night.component.html',
    styleUrls: ['./night.component.css']
})

export class NightComponent {
    title = 'final-project';

    ngOnInit() {
        this.callDate();
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
    callDate = () => {
        let now = new Date();
        this.dateString = now.toISOString();
        console.log(this.dateString);
        let i;
        for (i = 0; i < 10; i++) {
            this.dateStringShort += this.dateString[i];
        };
        console.log(`this.dateStringShort: ${this.dateStringShort}`);
        console.log(`this.dateStringShort[-1]: ${this.dateStringShort[this.dateStringShort.length - 1]}`)

        let timeStringShort: string = '';
        for (i = 11; i < 13; i++) {
            this.timeString = now.toISOString();
            timeStringShort += this.timeString[i];

            console.log(`this.timeString[i]: ${this.timeString[i]}`);
        }
        console.log(`this.timeString: ${this.timeString}`);
        console.log(`timeStringShort: ${timeStringShort}`);
        let timeStringNumber = parseInt(timeStringShort);
        if (timeStringNumber >= 20 || timeStringNumber <= 4) {
            let newTimeString: string = '';
            let lastNumberOfDate = parseInt(this.dateStringShort[this.dateStringShort.length - 1]);
            let changeLastNumberOfDate = lastNumberOfDate - 1;
            changeLastNumberOfDate.toString();
            for (i = 0; i < this.dateStringShort.length - 1; i++) {
                newTimeString += this.dateStringShort[i];
                console.log(newTimeString);
            }
            newTimeString += changeLastNumberOfDate;
            newTimeString += 'T00:00:00';
            console.log(`newTimeString: ${newTimeString}`);
            this.dateStringShort = newTimeString;


            // let changeLastNumber = parseInt(this.dateStringShort[this.dateStringShort.length-1]);
            // console.log(`changeLastNumber: ${changeLastNumber}`);
            // changeLastNumber -= 1;
            // console.log(`changeLastNumber: ${changeLastNumber}`);
            // changeLastNumber.toString();
            // this.dateStringShort = this.dateStringShort.slice(changeLastNumber,this.dateStringShort.length-1);
        }

        console.log(`this.dateStringShort: ${this.dateStringShort}`);
        console.log(typeof this.dateStringShort);

    }


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