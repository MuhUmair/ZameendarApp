import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'feed.html'
})
export class FeedPage {
  items: any;
  constructor(public navCtrl: NavController) {
    this.items = [
      {Name:'Sang Jan Su',Date:'01 - Apr',Time:'08:46 pm',MinAmount:'100',MaxAmount:'130',Text:'There is no one who loves pain itself,who seeks after it and wants to have it, simply because it is pain..',Comment:'7',Follow:'12'},
      {Name:'Sang Jan Su',Date:'01 - Apr',Time:'08:46 pm',MinAmount:'100',MaxAmount:'130',Text:'There is no one who loves pain itself,who seeks after it and wants to have it, simply because it is pain..',Comment:'7',Follow:'12'}
    ];
  }

}