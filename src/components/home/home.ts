import { Component, ElementRef } from '@angular/core';

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

  constructor(elm: ElementRef) {
    this.sliderTitle = elm.nativeElement.getAttribute('sliderTitle');
    this.avatarhomeImg = elm.nativeElement.getAttribute('avatarhomeImg');
    this.avatarhomeTitle = elm.nativeElement.getAttribute('avatarhomeTitle');
    console.log('Hello HomeComponent Component');
    // this.text = 'Hello World';
  }

}
