import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


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
}
