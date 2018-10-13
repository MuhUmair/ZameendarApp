import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constant/constants';
import 'rxjs/add/operator/map';


@Injectable()
export class DealerServiceProvider
{
    constructor(public http: HttpClient) {
        console.log('Hello DealerServiceProvider Provider');
        
    }
    getDealerList()
    {
        return new Promise(resolve => {
            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization': 'my-auth-token'
                })
              };
              
              this.http.get(Constants.API_ENDPOINT + '/user/allUsers.json',httpOptions)
              .subscribe(data => {
                resolve(data);
              }, (err) => {
                console.log(err);
                });
          });
    }
}
