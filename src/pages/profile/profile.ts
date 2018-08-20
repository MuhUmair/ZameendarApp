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
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {Name:'Capsicum',Phone:'Product Description',Followers:'100 Rs',Category:'Vegetable',ImagePath:'../../assets/imgs/vegetable.png'},
      {Name:'Capsicum',Phone:'Product Description',Followers:'100 Rs',Category:'Vegetable',ImagePath:'../../assets/imgs/vegetable.png'},
      {Name:'Capsicum',Phone:'Product Description',Followers:'100 Rs',Category:'Vegetable',ImagePath:'../../assets/imgs/vegetable.png'},
      {Name:'Capsicum',Phone:'Product Description',Followers:'100 Rs',Category:'Vegetable',ImagePath:'../../assets/imgs/vegetable.png'},
      {Name:'Capsicum',Phone:'Product Description',Followers:'100 Rs',Category:'Vegetable',ImagePath:'../../assets/imgs/vegetable.png'},
      {Name:'Capsicum',Phone:'Product Description',Followers:'100 Rs',Category:'Vegetable',ImagePath:'../../assets/imgs/vegetable.png'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
