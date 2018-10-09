import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Navigation
import { LoginPage } from '../login/login'
import { SignupPage } from '../signup/signup'
import {UserServiceProvider} from '../../providers/user-service/user-service';
import {HomeServiceProvider} from '../../providers/home-service/home-service';
import { DebugContext } from '@angular/core/src/view';
import { ProfilePage } from '../profile/profile';
import { GlobalVars } from './../../globals/globalVar';



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
  homeList:any
  public people: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public UserServiceProvider: UserServiceProvider
    , public HomeServiceProvider: HomeServiceProvider, public globalVars: GlobalVars) {
    this.loadList();

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  //Navigation
  goTologin(){
    this.globalVars.setHeaderName("Login");
    this.navCtrl.push(LoginPage);
  }
  goTosigUp(){
    this.globalVars.setHeaderName("SignUp");
    this.navCtrl.push(SignupPage);
  }
  goToProfile(id:any)
  {
    this.navCtrl.push(ProfilePage,id);
  }
  loadPeople(){
    this.UserServiceProvider.load()
    .then(data => {
      this.people = data;
      console.log(data);
    });
  }
  loadList()
  {
    this.HomeServiceProvider.getHomeList()
    .then(data => {
      this.homeList = data;

      console.log("whwkehrkj",this.homeList);
      // console.log("whwkehrkj",this.items);
      // console.log(this.coldStorageList);
      // console.log(this.tractorList);
    });
    

  }
}
