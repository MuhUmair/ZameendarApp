import {Component, ElementRef, Input} from '@angular/core';

/**
 * Generated class for the HorizontalItemSliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'horizontal-item-slider',
  templateUrl: 'horizontal-item-slider.html'
})
export class HorizontalItemSliderComponent {
  @Input() 
  avatarImg: string;
  @Input() 
  avatarTitle: any;
  // sliderTitle:string;
  constructor(elm: ElementRef) {
      // this.sliderTitle = elm.nativeElement.getAttribute('sliderTitle');
    this.avatarImg = elm.nativeElement.getAttribute('avatarImg');
    this.avatarTitle = elm.nativeElement.getAttribute('avatarTitle');
    //console.log(this.avatarImg+" | "+this.avatarTitle);
    //this.text = 'Hello World';
  }

}
