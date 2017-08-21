import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private email: string, private username: string) {}

  ngOnInit() {
    if (localStorage.getItem('currentUser')){
      const currentUser = localStorage.getItem('currentUser');
      // this.email = currentUser.user.email;
    }
  }

}
