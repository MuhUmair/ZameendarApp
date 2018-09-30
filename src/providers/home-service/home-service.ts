import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class HomeServiceProvider
{
    constructor(public http: HttpClient) {
        console.log('Hello HomeServiceProvider Provider');
        
    }
    getHomeList()
    {
        return new Promise(resolve => {
            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization': 'my-auth-token'
                })
              };
              this.http.get('http://sarcasmnew.com/Arat/Artee/pages/home.json',httpOptions)
              .subscribe(data => {
                resolve(data);
              }, (err) => {
                console.log(err);
                });
          });
    }
}
