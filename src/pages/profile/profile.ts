import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfileServiceProvider} from '../../providers/profile-service/profile-service';

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
  profileList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ProfileServiceProvider: ProfileServiceProvider) {
    this.loadProfileList();
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
  loadProfileList(){

    this.ProfileServiceProvider.getProfileList()
    .then(data => {
      this.profileList = data;

      console.log("Profile Data",this.profileList);
      // console.log(this.coldStorageList);
      // console.log(this.tractorList);
    }); 
  }

}
