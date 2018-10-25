import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVars } from '../../globals/globalVar';
import {ProfileServiceProvider} from '../../providers/profile-service/profile-service';
import { ICProfileWrapper } from './../../Interfaces/wrapper/IProfileWrapper';
declare var jQuery: any;
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
  minRate:any;
  maxRate:any;
  description:any;
  total:any;
  pId:any;
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

  addRates()
  {
    this.total = jQuery("#total").val();
    for(var i=0;i<this.total;i++)
    {
      this.minRate = jQuery("#minRate_"+i)[0].firstElementChild.value;
      this.maxRate = jQuery("#maxRate_"+i)[0].firstElementChild.value;
      this.description = jQuery("#description_"+i)[0].firstElementChild.value;
this.pId = jQuery("#pId_"+i).val();
      if(this.minRate != "" && this.maxRate != "")
      {
        this.ProfileServiceProvider.saveRates({minRate:this.minRate,maxRate:this.maxRate,content:this.description
          ,userID:this.globalVars.getUserID(),productID:this.pId,"date[year]":2018,"date[month]":10
          ,"date[day]":25}).then((data) =>{
          console.log(data)
        })
      }
    
    }
  }
}
