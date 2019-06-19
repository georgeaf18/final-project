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





}