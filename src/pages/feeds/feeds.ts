import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
})
export class FeedsPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {Name:'Sang Jan Su',Date:'01 - Apr',Time:'08:46 pm',
      Text:'There is no one who loves pain itself,who seeks after it and wants to have it, simply because it is pain..',
      Comment:'7',Follow:'12',Type:'multyfeed',
      multiitem: [{Name:'Capsicum',Phone:'Product Description',Followers:'100 Rs',Category:'Vegetable',ImagePath:'assets/imgs/vegetable.png'},
                  {Name:'Capsicum',Phone:'Product Description',Followers:'100 Rs',Category:'Vegetable',ImagePath:'assets/imgs/vegetable.png'},
                  {Name:'Capsicum',Phone:'Product Description',Followers:'100 Rs',Category:'Vegetable',ImagePath:'assets/imgs/vegetable.png'}]
    },
      {Name:'Sang Jan Su',Date:'01 - Apr',Time:'08:46 pm',MinAmount:'100',MaxAmount:'130',Text:'There is no one who loves pain itself,who seeks after it and wants to have it, simply because it is pain..',Comment:'7',Follow:'12',Type:'feed'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsPage');
  }

}
