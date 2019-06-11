import { Component } from '@angular/core';
import {Api} from './services/api.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';

  constructor(private api: Api) {

  }

  getData = () => {
    this.api.getWeather().subscribe(data => {
      console.log(data);
    })
  }
}
