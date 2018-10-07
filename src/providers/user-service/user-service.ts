import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constant/constants';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  load() {
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/')
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  getUsers() {
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/')
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  userLogin(body:any) {
    return new Promise(resolve => {
      this.http.post(Constants.API_ENDPOINT + '/user/jLogin.json',body)
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
