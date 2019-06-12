import { Component } from '@angular/core';
import { Api } from './services/api.services';

interface Hourly {
  apparentTemperature: number;
  humidity: number;
  icon: string;
  precipProbability: number;
  summary: string;
  temperature: number;
  time: number;
  windSpeed: number;
}

interface Location {
  Latitude: number;
  Longitude: number;
  error: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';
  hourly: Hourly[] = [];

  constructor(private api: Api) {

  }


  // location: Location[] = [];
  location = '';

  // if("geolocation" in navigator) {
  // // check if geolocation is supported/enabled on current browser
  // navigator.geolocation.getCurrentPosition(
  //   function success(position) {
  //     // for when getting location is a success
  //     console.log('latitude', position.coords.latitude,
  //       'longitude', position.coords.longitude);
  //   },
  //   function error(error_message) {
  //     // for when getting location results in an error
  //     console.error('An error has occured while retrieving
  //                   location', error_message)
  //   }  
  // });


  getLocation = () => {


  }








  getData = () => {
    this.api.getWeather().subscribe(data => {
      console.log(data);
      console.log(`the time: ${data.currently.time}`);
      // console.log(`the alert: ${data.flags.sources[0]}`);


      // THIS IS IMPORTANT
      // I ACTUALLY WAS ABLE TO RETURN WHAT WE NEED
      // LOOK HERE
      // YAYAYAYAYAYAYAY
      this.theHour = data.hourly.data;
      console.log(`hourly: ${this.theHour[0].apparentTemperature}`);




      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(this.showPosition);
      // } else {
      //   this.location = "Geolocation is not supported by this browser.";
      // }
      console.log(navigator.geolocation.getCurrentPosition((42.3601,-71.0589));
      // function showPosition(position) {
      //   this.location = "Latitude: " + position.coords.latitude +
      //     "<br>Longitude: " + position.coords.longitude;
      //   console.log(this.location);
      // }

      /// HOW THE FUCK DO I DO THIS????
      /// HOW DO I GET THE GETCURRENTPOSITION FUNCTION TO WORK FOR GEOLOCATION??????



    

      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      let date = new Date(data.currently.time * 1000);
      // Hours part from the timestamp
      let hours = date.getHours();
      // Minutes part from the timestamp
      let minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      let seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      console.log(`formatted time: ${formattedTime}`);

      // console.log(`the location is: latitude=${data.latitude}, longitude=${data.longitude}`);
    })
  }




}
