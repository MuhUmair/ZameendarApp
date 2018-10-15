import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ICFeedsWrapper } from './../../Interfaces/wrapper/IFeedsWrapper';
import {FeedServiceProvider} from '../../providers/feed-service/feed-service';
import { GlobalVars } from '../../globals/globalVar';

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
  feedList:ICFeedsWrapper;
  content:any;
  title:any;
  productID:any;
  autoID:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public FeedServiceProvider: FeedServiceProvider, public globalVars: GlobalVars) {
    this.loadFeedList();
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
  loadFeedList(){
    this.FeedServiceProvider.getFeedList()
    .then((data:ICFeedsWrapper) => {
      this.feedList = data;
      console.log("Feeds Data",this.feedList);
      // console.log(this.coldStorageList);
      // console.log(this.tractorList);
    }); 
  }

  saveStatus(){
    this.title = "";
    this.productID = -1;
    this.autoID = -1;
    this.FeedServiceProvider.saveStatus({content:this.content, title:this.title,productID:this.productID,userID:this.globalVars.getUserID(),autoID:this.autoID})
    .then((data:ICFeedsWrapper) => {
      debugger
        this.reload();
    });;
  }

  reload(){
    this.navCtrl.push(FeedsPage);
  }
}
