import { Storage } from '@ionic/storage';
import { ICLoginWrapper } from './../Interfaces/wrapper/ILoginWrapper';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVars {
    public loginState:boolean = false;
    public loginData:ICLoginWrapper;
    constructor(private storage: Storage){

    }
    setLoginDBData(){
        return new Promise(resolve => {
            this.storage.get('authLogin').then((data) => {
                if(data){
                    this.loginState = true;
                    this.loginData = data;
                }
                resolve(data);
            });
        })
        
    }
}