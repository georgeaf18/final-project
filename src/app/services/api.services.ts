import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class Api {
    server = 'https://thingproxy.freeboard.io/fetch/'
    apiUrl = 'https://api.darksky.net/forecast';
    apiKey = 'a37531bbb850d56fe736c132b318ead7';
    lat = '42.3601';
    long = '-71.0589';
    // https://api.darksky.net/forecast/a37531bbb850d56fe736c132b318ead7/42.3601,-71.0589

    constructor(private http: HttpClient) {

    }

    getWeather = () => {
       return this.http.get(`${this.server}${this.apiUrl}/${this.apiKey}/${this.lat},${this.long}`)

    }

}