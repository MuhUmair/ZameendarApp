import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constant/constants';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductServiceProvider {

  constructor(public http: HttpClient) {
  }

  saveProduct(body:any) {
    return new Promise(resolve => {
      this.http.post(Constants.API_ENDPOINT + '/product/add/.json',body)
        .subscribe(data => {
          resolve(data);
        });
    });
  } 
}
