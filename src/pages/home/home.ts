import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Navigation
import { LoginPage } from '../login/login'
import { SignupPage } from '../signup/signup'
import {UserServiceProvider} from '../../providers/user-service/user-service';



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

  public people: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public UserServiceProvider: UserServiceProvider) {
    this.loadPeople();

    
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
  loadPeople(){
    this.UserServiceProvider.load()
    .then(data => {
      this.people = data;
      console.log(data);
    });
  }
}
