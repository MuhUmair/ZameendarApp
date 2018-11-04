import { CommunicationServiceProvider } from './../../providers/communication-service/communication-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var jQuery: any;
declare const Pusher: any;
import {UserServiceProvider} from '../../providers/user-service/user-service';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chats:any;
  currentUser:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public communicationServiceProvider: CommunicationServiceProvider) {
    this.getAllChat();
    Pusher.logToConsole = true;

    var pusher = new Pusher('97cd6b12a476bc5810f1', {
      cluster: 'ap2',
      encrypted: true
    });

    var channel = pusher.subscribe('zameendar-channel');
    channel.bind('zameendar-event-char-user-' + "3" , (data) => {
      this.chats.push(data);
      console.log(data);
    });
    channel.bind('zameendar-event-char-jUser-' + "3" , (data) => {
      this.chats.push(data);
      console.log(data);
    });
    
  }
  ionViewDidEnter() {
    jQuery(".sendMsg").on('keypress', function(e){
      var code = e.keyCode || e.which;
      var ithis = jQuery(this);
      if(code == 13) { //Enter keycode
        
          jQuery.ajax({
              method: "POST",
              url: "http://sarcasmnew.com/Arat/test/pusherTest.php",//"http://localhost/Artee/test/pusherTest.php",
              data: {msg: ithis.val(), senderID: 16, receiverID: 3 } 
          })
          .done(function( msg ) {
              
              //alert( "Data Saved: " + msg );
          });
          jQuery.ajax({
            method: "POST",
            url: "http://sarcasmnew.com/Arat/test/jPusherTest.php",//"http://localhost/Artee/test/pusherTest.php",
            data: {msg: ithis.val(), senderID: 16, receiverID: 3 } 
        })
        .done(function( msg ) {
            
            //alert( "Data Saved: " + msg );
        });
          jQuery.ajax({
              method: "POST",
              url: "http://sarcasmnew.com/Arat/Artee/chat/add.json",
              data: {msg: ithis.val(), serderID: 16, receiverID: 3 } 
          })
          .done(function( msg ) {
            
              //alert( "Data Saved: " + msg );
          });
          setTimeout(function(){
              //jQuery(".msg-box").val("");
          }, 500);
          
        }
    });
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  goTochat(){
    this.navCtrl.push(ChatPage);
  }
  getAllChat(){
    this.communicationServiceProvider.getChats()
    .then(data => {
      this.chats = data;
      if(this.chats){
        this.currentUser = this.chats.authUser.id;
        this.chats = this.chats.chat;
        //this.commrec = this.comm.commrec;
      }

      console.log("whwkehrkj ",this.chats);
      // console.log(this.coldStorageList);
      // console.log(this.tractorList);
    }); 
  }
}
