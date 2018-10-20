import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constant/constants';
import 'rxjs/add/operator/map';

@Injectable()
export class SignUpServiceProvider {

  constructor(public http: HttpClient) {
  }

  userRegister(body:any,type:any) {
    return new Promise(resolve => {
      this.http.post(Constants.API_ENDPOINT + '/user/add/'+type+'.json',body)
        .subscribe(data => {
          resolve(data);
        });
    });
  } 
}
