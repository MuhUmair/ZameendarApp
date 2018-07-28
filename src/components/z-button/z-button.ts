import {Component, ElementRef} from '@angular/core';

/**
 * Generated class for the ZButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'z-button',
  templateUrl: 'z-button.html'
})
export class ZButtonComponent {

  btnText: string;
  buttonStyle: string;
  constructor(elm: ElementRef) {

    this.btnText = elm.nativeElement.getAttribute('btnText');
    this.buttonStyle = elm.nativeElement.getAttribute('buttonStyle');
  }

}
