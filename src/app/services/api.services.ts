import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { AppComponent } from '../app.component';

@Injectable()

export class Api {
    server = 'https://thingproxy.freeboard.io/fetch/'
    apiUrl = 'https://api.darksky.net/forecast';
    apiKey = 'a37531bbb850d56fe736c132b318ead7';
    // time = '1996-05-04T12:05:01';
    time = '2019-06-18T00:00:00';
    exclude = ''; //'minutely,flags,alerts';
    // lat = '42.3314';
    // long = '-83.0458';
    // https://api.darksky.net/forecast/a37531bbb850d56fe736c132b318ead7/42.3314,-83.0458


    constructor(private http: HttpClient) { }

    latitudeTest = '42.3601';
    longitudeTest = '-71.0589';

    getWeather = (lat, long) => {
       return this.http.get(`${this.server}${this.apiUrl}/${this.apiKey}/${lat},${long},${this.time}?exclude=${this.exclude}`)

    }
  


    


}