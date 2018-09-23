import { Component, ElementRef } from '@angular/core';
import {UserServiceProvider} from '../../providers/user-service/user-service';

/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  // text: string;
  sliderTitle: string;
  avatarhomeImg: string;
  avatarhomeTitle: string;
  public people: any;

  constructor(elm: ElementRef,public UserServiceProvider: UserServiceProvider) {
    this.sliderTitle = elm.nativeElement.getAttribute('sliderTitle');
    this.avatarhomeImg = elm.nativeElement.getAttribute('avatarhomeImg');
    this.avatarhomeTitle = elm.nativeElement.getAttribute('avatarhomeTitle');
    console.log('Hello HomeComponent Component');
    // this.text = 'Hello World';
  }
  loadPeople(){
    this.UserServiceProvider.load()
    .then(data => {
      this.people = data;
      console.log(data);
    });
  }
}
