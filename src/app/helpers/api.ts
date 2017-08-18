/**
 * Created by adebayooluwadamilola on 8/8/17.
 */

import {Component, Injectable, OnInit} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiFactory {
  baseUrl = 'http://diaryapi.dev';

  constructor(private http: Http) { }

  get(apiUrl: string) {
    return this.http.get(this.baseUrl + apiUrl, this.header())
      .map((response: Response) => {
        return response.json();
      });
  }
  post(apiUrl: string, data: any = {}, useToken: boolean = true) {
    return this.http.post(this.baseUrl + apiUrl, JSON.stringify(data), this.header(useToken))
      .map((response: Response) => {
        return response.json();
      });
  }

  patch(apiUrl: string, data: any = {}, useToken: boolean = true) {
    return this.http.patch(this.baseUrl + apiUrl, JSON.stringify(data), this.header())
      .map((response: Response) => {
        return response.json();
      });
  }

  delete(apiUrl: string) {
    return this.http.delete(this.baseUrl + apiUrl, this.header())
      .map((response: Response) => {
        return response.json();
      });
  }

  private header(useToken: boolean = true) {
    const headerOptions: any = { 'Content-Type': 'application/json' };

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (useToken && currentUser && currentUser.token) {
      headerOptions['Authorization'] = 'Bearer ' + currentUser.token;
    }else {
      // Redirect back to login Page
    }

    const headers = new Headers(headerOptions);
    return new RequestOptions({ headers: headers });
  }
}
