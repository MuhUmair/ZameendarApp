import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
//Navigation
import { FeedsPage } from '../feeds/feeds'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController) {

  }
  // Navigation
  goTofeeds(){
    this.navCtrl.push(FeedsPage);
  }

}
