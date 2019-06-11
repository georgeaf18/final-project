import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Api} from './services/api.services'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
