import { Storage } from '@ionic/storage';
import { ICLoginWrapper } from './../Interfaces/wrapper/ILoginWrapper';
import { Injectable } from '@angular/core';
import * as Constants  from '../providers/constant/constants';
declare var jQuery: any;

@Injectable()
export class GlobalVars {
    public loginState:boolean = false;
    public loginData:ICLoginWrapper;
    public baseURL:string;
    constructor(private storage: Storage){
        this.baseURL = Constants.API_ENDPOINT;
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

    getUserID()
    {
        return this.loginData.user.id;
    }

    setHeaderName(name){
        if(name == "Login" ||name == "SignUp")
        {
            jQuery(".header").css("display","none","important");
            jQuery(".footer").css("display","none","important");
        }
        else
        {
            jQuery(".toolbar-title").html(name);
            jQuery(".header").css("display","block","important");
            jQuery(".footer").css("display","block","important");
        }

    }
}