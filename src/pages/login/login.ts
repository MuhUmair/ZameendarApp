import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
