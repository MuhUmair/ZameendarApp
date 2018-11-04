import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constant/constants';
import 'rxjs/add/operator/map';


@Injectable()
export class CommunicationServiceProvider
{
    constructor(public http: HttpClient) {
        console.log('Hello HomeServiceProvider Provider');
        
    }
    getCommunicationList()
    {
        return new Promise(resolve => {
            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization': 'my-auth-token'
                })
              };
              this.http.get(Constants.API_ENDPOINT + '/Chat/jIndex.json',httpOptions)
              .subscribe(data => {
                resolve(data);
              }, (err) => {
                console.log(err);
                });
          });
    }

    getChats()
    {
        return new Promise(resolve => {
            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization': 'my-auth-token'
                })
              };
              this.http.get(Constants.API_ENDPOINT + '/chat/index/3.json',httpOptions)
              .subscribe(data => {
                resolve(data);
              }, (err) => {
                console.log(err);
                });
          });
    }
}
