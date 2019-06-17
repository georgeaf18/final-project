import { Component } from '@angular/core';
import { Api } from '../services/api.services';



@Component({
    selector: 'daytime-component',
    templateUrl: './daytime.component.html',
    styleUrls: ['./daytime.component.css']
})

export class DaytimeComponent {
    title = 'final-project';



    constructor(private api: Api) {



    }}