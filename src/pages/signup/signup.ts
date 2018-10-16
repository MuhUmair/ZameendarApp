import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var jQuery: any;
import { SignUpServiceProvider } from './../../providers/signup-service/signup-service';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  type:any;zName:string;zPassword:string;zMobile:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public SignUpServiceProvider: SignUpServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  Register()
  {
    this.SignUpServiceProvider.userRegister({name:this.zName,password:this.zPassword,mobile:this.zMobile},this.type)
    .then((data) =>{
      console.log(data)
    })
      console.log("Type: " + this.type + " | zName: "+ this.zName + " | zPassword: "+this.zPassword+" | zMobile: "+this.zMobile)
  }
  changeType($event)
  {
    this.type = $event;
    if($event == 2)
    {
      jQuery("#tractor").show();
      jQuery("#coldStorage").hide();
      jQuery("#dealer").hide();
      jQuery("#zameendar").hide();
    }
    else if($event == 3)
    {
      jQuery("#tractor").hide();
      jQuery("#coldStorage").show();
      jQuery("#dealer").hide();
      jQuery("#zameendar").hide();
    }
    else if($event == 4)
    {
      jQuery("#tractor").hide();
      jQuery("#coldStorage").hide();
      jQuery("#dealer").show();
      jQuery("#zameendar").hide();
    }
    else if($event == 5)
    {
      jQuery("#tractor").hide();
      jQuery("#coldStorage").hide();
      jQuery("#dealer").hide();
      jQuery("#zameendar").show();
    }
  }
}
