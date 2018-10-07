import { Component, ElementRef, Input } from '@angular/core';
import * as Constants  from '../../providers/constant/constants';
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
  baseURL:string;
  constructor(elem:ElementRef) {
    this.item = elem.nativeElement.getAttribute('item');
    this.baseURL = Constants.API_ENDPOINT;
    // console.log('this.item' + this.item);
    // debugger
   
  }

}
