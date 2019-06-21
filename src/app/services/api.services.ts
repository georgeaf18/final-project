import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class Api {

    private _weather = new BehaviorSubject(null);
    weather = this._weather.asObservable();

    server = 'https://thingproxy.freeboard.io/fetch/'
    apiUrl = 'https://api.darksky.net/forecast';
    apiKey = 'a37531bbb850d56fe736c132b318ead7';
    time = '';
    // time = '2019-06-18T00:00:00'; //needed to finish the Time Machine Callback for the Darksky API
    exclude = ''; //'minutely,flags,alerts';
    // https://api.darksky.net/forecast/a37531bbb850d56fe736c132b318ead7/42.3314,-83.0458

   
    
    constructor(private http: HttpClient) { }
    
    
    updateWeather = (data) => {
        this._weather.next(data);
    }

    getWeather = (lat, long) => {
        return this.http.get(`${this.server}${this.apiUrl}/${this.apiKey}/${lat},${long},${this.dateStringShort}${this.time}?exclude=${this.exclude}`)

    }


    
    dateString;
    dateStringShort: string = '';
    timeString: string = '';
    // OK BIG PROBLEM (KIND OF)
    // .toISOString() automatically adds 4 hours to EST and cannot be overrode ...
    // this will cause problems to occur if a user looks at the app anytime after 8pm...
    // // the API will be calling a date in the future (impossible) and will not return any information 
    // callDate = () => {
    //     let now = new Date();
    //     this.dateString = now.toISOString();
    //     console.log(this.dateString);
    //     let i;
    //     for (i = 0; i < 10; i++) {
    //         this.dateStringShort += this.dateString[i];
    //     };
    //     console.log(this.dateStringShort);
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

        let timeStringShortDay: string = '';
        let timeStringShortNotDay: string = '';
        for (i = 0; i < 8; i++) {
            this.timeString = now.toISOString();
            timeStringShortNotDay += this.timeString[i];

            // console.log(`this.timeString[i]: ${this.timeString[i]}`);
        }
        console.log(`this.timeString: ${this.timeString}`);
        console.log(`timeStringShortNotDay: ${timeStringShortNotDay}`);
        console.log(typeof timeStringShortNotDay);


        for (i = 8; i < 10; i++) {
            this.timeString = now.toISOString();
            timeStringShortDay += this.timeString[i];

            // console.log(`this.timeString[i]: ${this.timeString[i]}`);
        }
        console.log(`this.timeString: ${this.timeString}`);
        console.log(`timeStringShortDay: ${timeStringShortDay}`);
        console.log(typeof timeStringShortDay);

        let timeStringNumber = parseInt(timeStringShortDay);
        console.log(`timeStringNumber: ${timeStringNumber}`);
        console.log(typeof timeStringNumber);
        if (timeStringNumber >= 20 || timeStringNumber <= 4) {
            // timeStringNumber -= 1;
            
            
            
            let newTimeString: string = '';
            console.log(`newTimeString: ${newTimeString}`);



            // let lastNumberOfDate = parseInt(this.dateStringShort[this.dateStringShort.length - 1]);
            // // let secondToLastNumberOfDate = parseInt(this.dateStringShort[this.dateStringShort.length-2]);

            let changeLastNumberOfDate = timeStringNumber - 1;
            console.log(`changeLastNumberOfDate: ${changeLastNumberOfDate}`);
            console.log(typeof changeLastNumberOfDate);
            let stringChangeLastNumberOfDate = changeLastNumberOfDate.toString();
            console.log(`stringChangeLastNumberOfDate: ${stringChangeLastNumberOfDate}`);
            console.log(typeof stringChangeLastNumberOfDate);
            // for (i = 0; i < this.dateStringShort.length - 1; i++) {
            //     newTimeString += this.dateStringShort[i];
            //     console.log(newTimeString);
            // }
            // newTimeString += changeLastNumberOfDate;
            newTimeString = timeStringShortNotDay + stringChangeLastNumberOfDate;
            // newTimeString += 'T00:00:00';
            console.log(`newTimeString: ${newTimeString}`);
            console.log(typeof newTimeString);

            console.log(`this.dateStringShort: ${this.dateStringShort}`);
            this.dateStringShort = newTimeString;
            this.time = newTimeString;
            

            return newTimeString;
            // let changeLastNumber = parseInt(this.dateStringShort[this.dateStringShort.length-1]);
            // console.log(`changeLastNumber: ${changeLastNumber}`);
            // changeLastNumber -= 1;
            // console.log(`changeLastNumber: ${changeLastNumber}`);
            // changeLastNumber.toString();
            // this.dateStringShort = this.dateStringShort.slice(changeLastNumber,this.dateStringShort.length-1);
        }

    

    }







}