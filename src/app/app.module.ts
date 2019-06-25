import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Api } from './services/api.services'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule,  } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DaytimeComponent } from './daytime/daytime.component';
import { NightComponent } from './night/night.component';
import { Round } from './pipes/round.pipe';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { SkyconsModule } from 'ngx-skycons';

const appRoutes: Routes = [
  {path: '', component: DaytimeComponent},
  {path: 'night', component: NightComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DaytimeComponent,
    NightComponent,
    Round
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    UiSwitchModule,
    SkyconsModule

  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
