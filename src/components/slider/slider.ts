import {Component, ElementRef} from '@angular/core';

/**
 * Generated class for the SliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {

  // text: string;
  imgName: string;
  titleName: string;

  constructor(elm: ElementRef) {
      this.imgName = elm.nativeElement.getAttribute('imgName');
      this.titleName = elm.nativeElement.getAttribute('titleName');
    // console.log('Hello SliderComponent Component');
    // this.text = 'Hello World';
  }

}
