import { Component, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the DetailHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail-header',
  templateUrl: 'detail-header.html'
})
export class DetailHeaderComponent {
  @Input() item:{
    Name:string,
    Date:string,
    Time:string,
    MinAmount:number,
    MaxAmount:number,
    Text:string,
    Comment:number,
    Follow:number,
    Type:string,
    multiitem:[{Name:string,Phone:string,Followers:number,ImagePath:string}],
    baseURL:string
  }
  constructor(elem:ElementRef) {
   this.item = elem.nativeElement.getAttribute('item');
  }

}
