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
  item:{Name:string,Phone:string,Followers:number,ImagePath:string};
  constructor(elem:ElementRef) {
    console.log('Hello DetailListItemComponent Component');
   this.item = elem.nativeElement.getAttribute('item');
  }

}
