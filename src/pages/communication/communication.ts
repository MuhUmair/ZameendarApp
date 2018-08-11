import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommunicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-communication',
  templateUrl: 'communication.html',
})
export class CommunicationPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {Name:'MARY GREEN',Message:'is now following you',Time:'2 min ago'},
      {Name:'TOM HARRISON',Message:'share your post "POST TITLE" via FACEBOOK',Time:'20 min ago'},
      {Name:'JOHN MORRISON',Message:'reposted your "POST TITLE"',Time:'2 hours ago'},
      {Name:'OLEG PETROV',Message:'commented on your post "POST TITLE"',Time:'2 hours ago'},
      {Name:'OLEG PETROV',Message:'like your "POST TITLE"',Time:'2 hours ago'},
      {Name:'F1 COMMUNITY',Message:'invited you to join',Time:'5 hours ago'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunicationPage');
  }

}

