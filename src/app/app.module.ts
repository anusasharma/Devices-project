import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevicesHomeComponent } from './devices-home/devices-home.component';
import {DatePipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {DevicesListLoadingComponent} from "./devices-list-loading/devices-list-loading.component";

@NgModule({
  declarations: [
    AppComponent,
    DevicesHomeComponent,
    DevicesListLoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
