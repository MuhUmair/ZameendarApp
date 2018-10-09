import { Component, ElementRef, Input } from '@angular/core';
import * as Constants  from '../../providers/constant/constants';
import { GlobalVars } from '../../globals/globalVar';
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
  constructor(elem:ElementRef, public globalVars: GlobalVars) {
    this.item = elem.nativeElement.getAttribute('item');
    this.baseURL = this.globalVars.baseURL;
    // console.log('this.item' + this.item);
    // debugger
   
  }

}
