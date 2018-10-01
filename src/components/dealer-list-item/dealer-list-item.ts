import { Component, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the DealerListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dealer-list-item',
  templateUrl: 'dealer-list-item.html'
})
export class DealerListItemComponent {
  @Input() 
  item:any;
  constructor(elem:ElementRef) {
    this.item = elem.nativeElement.getAttribute('item');
    // console.log('this.item' + this.item);
    // debugger
   
  }

}
