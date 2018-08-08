import {Component, ElementRef, Input} from '@angular/core';

/**
 * Generated class for the IconListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'icon-list-item',
  templateUrl: 'icon-list-item.html'
})
export class IconListItemComponent {

  text: string;
  iconClass: string;
  displayText: string;
  badgeCount: string;
  constructor(elm: ElementRef) {
    this.displayText = elm.nativeElement.getAttribute('displayText');
      this.iconClass = elm.nativeElement.getAttribute('iconClass');
      this.badgeCount = elm.nativeElement.getAttribute('badgeCount');

  }

}
