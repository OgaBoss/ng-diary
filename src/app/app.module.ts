// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routes/app-routing.module';
import { RouterModule } from '@angular/router';


// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/common/nav/nav.component';

// Services
import { AuthenticationService } from './services/authentication.service';
import { ApiFactory } from './helpers/index';

// Style
import '../styles/styles.scss';

// Others

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
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    AuthenticationService,
    ApiFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
