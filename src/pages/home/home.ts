import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Navigation
import { LoginPage } from '../login/login'
import { SignupPage } from '../signup/signup'



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  //Navigation
  goTologin(){
    this.navCtrl.push(LoginPage);
  }
  goTosigUp(){
    this.navCtrl.push(SignupPage);
  }
}
