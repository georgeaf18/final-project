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

    // https://api.darksky.net/forecast/a37531bbb850d56fe736c132b318ead7/42.3314,-83.0458${lat},${long}

    date = new Date();
    day = this.date.getDay();
    
    constructor(private http: HttpClient) { }
    
    
    updateWeather = (data) => {
        this._weather.next(data);
    }

    getWeather = (lat, long) => {
        const URL = `${environment.api}/bundle/${lat}/${long}`;
        return this.http.get(URL)
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