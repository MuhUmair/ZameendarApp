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
  dName:string;dEmail:string;dPassword:string;dPhone:string;dMobile:string;dAddress:string;dCity:string;dCategory:string;dMarket:string;dDescription:string;
  tName:string;tEmail:string;tPassword:string;tPhone:string;tMobile:string;tAddress:string;tCity:string;tCategory:string;tDescription:string;
  cName:string;cEmail:string;cPassword:string;cPhone:string;cMobile:string;cAddress:string;cCity:string;cCategory:string;cCapacity:string;cDescription:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public SignUpServiceProvider: SignUpServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  Register()
  {
    if(this.type == 5){
    this.SignUpServiceProvider.userRegister({name:this.zName,password:this.zPassword,mobile:this.zMobile},this.type)
    .then((data) =>{
      console.log(data)
    })
  }
  else if(this.type == 4){
    debugger
    this.SignUpServiceProvider.userRegister({name:this.dName,email:this.dEmail,password:this.dPassword
    ,phone:this.dPhone,mobile:this.dMobile,address:this.dAddress,city:this.dCity,category:this.dCategory
    ,mType:this.dMarket,description:this.dDescription},this.type)
    .then((data) =>{
      console.log(data)
    })
  }
  else if(this.type == 3){
    this.SignUpServiceProvider.userRegister({name:this.cName,email:this.cEmail,password:this.cPassword
    ,phone:this.cPhone,mobile:this.cMobile,address:this.cAddress,city:this.cCity,category:this.cCategory
    ,capacity:this.cCapacity,description:this.cDescription},this.type)
    .then((data) =>{
      console.log(data)
    })
  }
  else if(this.type == 2){
    this.SignUpServiceProvider.userRegister({name:this.tName,email:this.tEmail,password:this.tPassword
    ,phone:this.tPhone,mobile:this.tMobile,address:this.tAddress,city:this.tCity,category:this.tCategory
    ,description:this.tDescription},this.type)
    .then((data) =>{
      console.log(data)
    })
  }   
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