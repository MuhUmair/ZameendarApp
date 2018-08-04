import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../../pages/feed/feed';
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  
  constructor(public navCtrl: NavController) {
  }
}
