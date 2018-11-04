import { CommunicationServiceProvider } from './../../providers/communication-service/communication-service';
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
  comm:any;
  commrec:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public communicationServiceProvider: CommunicationServiceProvider) {
    this.loadCommunicationList();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunicationPage');
  }
  loadCommunicationList()
  {
    this.communicationServiceProvider.getCommunicationList()
    .then(data => {
      this.comm = data;
      if(this.comm){
        this.commrec = this.comm.commrec;
      }

      console.log("whwkehrkj ",this.comm.commrec);
      // console.log(this.coldStorageList);
      // console.log(this.tractorList);
    }); 
  }
}

