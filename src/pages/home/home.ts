import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Navigation
import { LoginPage } from '../login/login'
import { SignupPage } from '../signup/signup'
import {UserServiceProvider} from '../../providers/user-service/user-service';
import {HomeServiceProvider} from '../../providers/home-service/home-service';
import { DebugContext } from '@angular/core/src/view';



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
  arteeList: any;
  coldStorageList:any;
  tractorList:any;
  public people: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public UserServiceProvider: UserServiceProvider
    , public HomeServiceProvider: HomeServiceProvider) {
    this.loadList();

    
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
  loadList()
  {
    this.HomeServiceProvider.getHomeList()
    .then(data => {
      debugger
      this.arteeList = data.artees;
      this.coldStorageList = data.storages;
      this.tractorList = data.tracktors;

      console.log(this.arteeList);
      console.log(this.coldStorageList);
      console.log(this.tractorList);
    });
    

  }
}
