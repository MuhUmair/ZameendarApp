import {Component, ElementRef} from '@angular/core';

/**
 * Generated class for the InputLabelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'input-label',
  templateUrl: 'input-label.html'
})
export class InputLabelComponent {

  text: string;
    InputLabel: string;
    // Inputborder: string;
  constructor(elm: ElementRef) {
      this.InputLabel = elm.nativeElement.getAttribute('InputLabel');
      // this.Inputborder = elm.nativeElement.getAttribute('Inputborder');
    // console.log('Hello InputLabelComponent Component');
    // this.text = 'Hello World';
  }

}
