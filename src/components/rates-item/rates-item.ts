import { Component, ElementRef, Input } from '@angular/core';


/**
 * Generated class for the RatesItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rates-item',
  templateUrl: 'rates-item.html'
})
export class RatesItemComponent {
  @Input() 
  item:{Name:string,Image:string};
  constructor(elem:ElementRef) {
    console.log('Hello RatesItemComponent Component');
    this.item = elem.nativeElement.getAttribute('item');
  }

}
