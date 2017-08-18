import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import '../styles/styles.scss';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/common/nav/nav.component';
import {AuthenticationService} from './services/authentication.service';
import {ApiFactory} from './helpers/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AuthenticationService,
    ApiFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
