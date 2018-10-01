import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profileSegment = 'products',
    this.items = [
      {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:2,imagePath:'assets/imgs/vegetable.png'},
      {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:3,imagePath:'assets/imgs/vegetable.png'},
      {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:3,imagePath:'assets/imgs/vegetable.png'},
      {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:3,imagePath:'assets/imgs/vegetable.png'},
      {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:3,imagePath:'assets/imgs/vegetable.png'},
      {name:'Capsicum',mobile:'Product Description',followers:'100 Rs',type:3,imagePath:'assets/imgs/vegetable.png'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
