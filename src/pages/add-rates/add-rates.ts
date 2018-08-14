import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddRatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-rates',
  templateUrl: 'add-rates.html',
})
export class AddRatesPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {Name:'Peas',Image:'../../assets/imgs/peas.png'},
      {Name:'Brinjal',Image:'../../assets/imgs/brinjal.png'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRatesPage');
  }

}
