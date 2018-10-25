import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as Constants from '../constant/constants';

@Injectable()
export class ProfileServiceProvider
{
    constructor(public http: HttpClient) {
        console.log('Hello ProfileServiceProvider Provider');
        
    }
    getProfileList(id:any)
    {
        return new Promise(resolve => {
            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization': 'my-auth-token'
                })
              };
              this.http.get('http://sarcasmnew.com/Arat/Artee/user/profile/'+id+'.json',httpOptions)
              .subscribe(data => {
                resolve(data);
              }, (err) => {
                console.log(err);
                });
          });
    }

    saveRates(body:any) {
        return new Promise(resolve => {
            debugger
          this.http.post(Constants.API_ENDPOINT + '/rates/addProductRate.json',body)
            .subscribe(data => {
              resolve(data);
            });
        });
      } 
}
