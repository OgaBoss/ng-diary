import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { AuthenticationService } from '../../services/authentication.service';


import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router, private notify: NotificationsService, private auth: AuthenticationService) {}

  ngOnInit() {
    if (! this.auth.isLoggedIn() ) {
      this.route.navigate(['']);

      // Create a Notification
      this.notify.error('Notification', 'You need to log in to access that page!');
    }
  }
}
