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
  baseURL:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public FeedServiceProvider: FeedServiceProvider, public globalVars: GlobalVars) {
    this.loadFeedList();
    this.baseURL = this.globalVars.baseURL;
  }

  ionViewDidLoad() {
    console.log(this.baseURL);
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

}
