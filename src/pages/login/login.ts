import { Component } from '@angular/core';
import { ICLoginWrapper } from './../../Interfaces/wrapper/ILoginWrapper';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//Navigation
import { SignupPage } from '../signup/signup'
import { ProfilePage } from '../profile/profile'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mobile: string;
  password: string;
  lData:ICLoginWrapper
  constructor(public navCtrl: NavController, public navParams: NavParams, public UserServiceProvider: UserServiceProvider, private storage: Storage) {
  }
  isLogin(){
    this.UserServiceProvider.userLogin({mobile:this.mobile, password:this.password})
    .then((data:ICLoginWrapper) => {
      this.lData = data;
      if(this.lData.authUser){
        this.storage.remove("authLogin");
        this.storage.set("authLogin", this.lData);
        this.goToprofile();
      }

      // console.log(this.arteeList);
      // console.log(this.coldStorageList);
      // console.log(this.tractorList);
    });;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  //Navigation
  goTosigUp(){
    this.navCtrl.push(SignupPage);
  }
  goToprofile(){
    this.navCtrl.push(ProfilePage);
  }

}
