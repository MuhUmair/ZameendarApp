import { Component, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the DealerListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'communication-item',
  templateUrl: 'communication-item.html'
})
export class CommunicationItemComponent {
  @Input() 
  item:{Name:string,Message:string,Time:string};
  constructor(elem:ElementRef) {
    console.log('Hello CommunicationItemComponent Component');
   this.item = elem.nativeElement.getAttribute('item');
  }

}
