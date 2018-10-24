import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ICProfileWrapper } from './../../Interfaces/wrapper/IProfileWrapper';
import {ProfileServiceProvider} from '../../providers/profile-service/profile-service';
import { GlobalVars } from '../../globals/globalVar';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileSegment: any;
  id:any;
  profileList:ICProfileWrapper;
  baseURL:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ProfileServiceProvider: ProfileServiceProvider,
     public globalVars: GlobalVars) {
    this.globalVars.setHeaderName("Profile");
    this.baseURL = this.globalVars.baseURL;
    if(navParams.data.toString() != "[object Object]")
    {
    this.loadProfileList(navParams.data);
    }
    else
    {
      this.loadProfileList(this.globalVars.getUserID());
    }
    this.profileSegment = 'products'
    // this.profileList = [
    //   {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:2,imagePath:'assets/imgs/vegetable.png'},
    //   {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:3,imagePath:'assets/imgs/vegetable.png'},
    //   {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:3,imagePath:'assets/imgs/vegetable.png'},
    //   {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:3,imagePath:'assets/imgs/vegetable.png'},
    //   {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:3,imagePath:'assets/imgs/vegetable.png'},
    //   {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:3,imagePath:'assets/imgs/vegetable.png'},
    // ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  loadProfileList(profileId : any){
    this.ProfileServiceProvider.getProfileList(profileId)
    .then((data:ICProfileWrapper) => {
      this.profileList = data;
      console.log("Profile Data",this.profileList);
      // console.log(this.coldStorageList);
      // console.log(this.tractorList);
    }); 
  }

}
