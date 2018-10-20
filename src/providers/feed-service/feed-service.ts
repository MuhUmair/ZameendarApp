import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constant/constants';
import 'rxjs/add/operator/map';


@Injectable()
export class FeedServiceProvider
{
    constructor(public http: HttpClient) {
        console.log('Hello HomeServiceProvider Provider');
        
    }
    getFeedList()
    {
        return new Promise(resolve => {
            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization': 'my-auth-token'
                })
              };
              this.http.get(Constants.API_ENDPOINT + '/Feed.json',httpOptions)
              .subscribe(data => {
                resolve(data);
              }, (err) => {
                console.log(err);
                });
          });
    }

    saveStatus(body:any)
    {
        debugger
        return new Promise(resolve => {
            this.http.post(Constants.API_ENDPOINT + '/Feed/add.json',body)
              .subscribe(data => {
                resolve(data);
              });
          });
    }
}
