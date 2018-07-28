import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello InputFieldComponent Component');
    this.text = 'Hello World';
  }

}
