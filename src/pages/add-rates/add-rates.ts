import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVars } from '../../globals/globalVar';
import {ProfileServiceProvider} from '../../providers/profile-service/profile-service';
import { ICProfileWrapper } from './../../Interfaces/wrapper/IProfileWrapper';
/**
 * Generated class for the AddRatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-rates',
  templateUrl: 'add-rates.html',
})
export class AddRatesPage {
  items: ICProfileWrapper;
  constructor(public navCtrl: NavController, public navParams: NavParams,public globalVars: GlobalVars
    , public ProfileServiceProvider: ProfileServiceProvider) {
    // this.items = [
    //   {Name:'Peas',Image:'assets/imgs/peas.png'},
    //   {Name:'Brinjal',Image:'assets/imgs/brinjal.png'}];
      this.loadProduct(this.globalVars.getUserID());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRatesPage');
  }

  loadProduct(id:any)
  {
    this.ProfileServiceProvider.getProfileList(id)
    .then((data:ICProfileWrapper) => {
      this.items = data;
      console.log("Products",this.items);
      // console.log(this.coldStorageList);
      // console.log(this.tractorList);
    }); 
  }
}
