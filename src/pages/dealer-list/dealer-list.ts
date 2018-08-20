import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DealerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dealer-list',
  templateUrl: 'dealer-list.html',
})
export class DealerListPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {Name:'Maurrice Hans',Phone:'Phone: 123 123 123',Followers:'Followers 100',Category:'Dealer',ImagePath:'../../assets/imgs/profile.png'},
      {Name:'Maurrice Hans',Phone:'Phone: 123 123 123',Followers:'Followers 100',Category:'Dealer',ImagePath:'../../assets/imgs/profile.png'},
      {Name:'Maurrice Hans',Phone:'Phone: 123 123 123',Followers:'Followers 100',Category:'Dealer',ImagePath:'../../assets/imgs/profile.png'},
      {Name:'Maurrice Hans',Phone:'Phone: 123 123 123',Followers:'Followers 100',Category:'Dealer',ImagePath:'../../assets/imgs/profile.png'},
      {Name:'Maurrice Hans',Phone:'Phone: 123 123 123',Followers:'Followers 100',Category:'Dealer',ImagePath:'../../assets/imgs/profile.png'},
      {Name:'Maurrice Hans',Phone:'Phone: 123 123 123',Followers:'Followers 100',Category:'Dealer',ImagePath:'../../assets/imgs/profile.png'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealerListPage');
  }

}
