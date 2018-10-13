import { Component, ElementRef} from '@angular/core';

/**
 * Generated class for the InputFieldComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'input-field',
  templateUrl: 'input-field.html'
})
export class InputFieldComponent {

  text: string;
  InputPlaceholder: string;
  inputType: string;

  constructor(elm: ElementRef) {
    this.InputPlaceholder = elm.nativeElement.getAttribute('InputPlaceholder');
    this.inputType = 'text';
    if(elm.nativeElement.getAttribute('inputType')){
      this.inputType = elm.nativeElement.getAttribute('inputType');
      //console.log(this.inputType);
      
    }
    console.log('Hello InputFieldComponent Component');
    this.text = 'Hello World';
  }

}
