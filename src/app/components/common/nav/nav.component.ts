import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) {}


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
  }

}
