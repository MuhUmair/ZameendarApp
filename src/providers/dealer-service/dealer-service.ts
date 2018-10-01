import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
              this.http.get('http://sarcasmnew.com/Arat/Artee/user.json',httpOptions)
              .subscribe(data => {
                resolve(data);
              }, (err) => {
                console.log(err);
                });
          });
    }
}
