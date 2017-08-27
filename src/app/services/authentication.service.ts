import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ApiFactory } from '../helpers/index';
import { LoginResponse } from '../models/index';

@Injectable()
export class AuthenticationService {

  constructor(private api: ApiFactory) { }

  login(email: string, password: string) {
    return this.api.post('/auth/login', {email: email, password: password}, false)
      .map((response) => {
        const token = response.token;
        if (response && token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          return response;
        }
      });
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser');
  }
}
