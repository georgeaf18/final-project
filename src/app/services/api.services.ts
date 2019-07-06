import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class Api {

    private _weather = new BehaviorSubject(null);
    weather = this._weather.asObservable();

    private _nightAvg = new BehaviorSubject(null);
    nightAvg = this._nightAvg.asObservable();

    private _dayAvg = new BehaviorSubject(null);
    dayAvg = this._dayAvg.asObservable();

    server = environment.production ? 'https://thingproxy.freeboard.io/fetch/' : '';
    apiUrl = 'https://api.darksky.net/forecast';
    apiKey = 'a6b163791b23867f78166369b89ffa02';
    // time = '1996-05-04T12:05:01';
    time = '2019-06-28'; //needed for the Time Machine Callback for the Darksky API
    exclude = ''; //'minutely,flags,alerts';
    // https://api.darksky.net/forecast/a37531bbb850d56fe736c132b318ead7/42.3314,-83.0458${lat},${long}

   
    
    constructor(private http: HttpClient) { }
    
    
    updateWeather = (data) => {
        this._weather.next(data);
    }

    getWeather = (lat, long, time=this.time) => {
        console.log(`called: ${time}`);
        return this.http.get(`${this.server}${this.apiUrl}/${this.apiKey}/42.3314,-83.0458,${this.dateStringShort}${time}T00:00:00?exclude=${this.exclude}`)
    }

    getLocationAPI = () => {
        return this.http.get('https://ipapi.co/json/');
    }


    updateNightAvg = (data) => {
        this._nightAvg.next(data);
        console.log(data);
    }
    
    updateDayAvg = (data) => {
        this._dayAvg.next(data);
    }

    
    dateString;
    dateStringShort: string = '';
    timeString: string = '';


}