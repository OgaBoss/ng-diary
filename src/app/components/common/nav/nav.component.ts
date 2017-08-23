import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private notify: NotificationsService) {}


  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      const currentUser = localStorage.getItem('currentUser');
      // this.email = currentUser.user.email;
    }
  }

  logout() {
    // Remove login details from LocalStorage
    localStorage.removeItem('currentUser');

    // Redirect back to login page
    this.router.navigate(['']);

    this.notify.alert('Some Alert', 'Need Some alert badly');
  }

}
