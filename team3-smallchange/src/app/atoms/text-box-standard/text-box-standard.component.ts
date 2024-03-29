/**************************************************************************
  Note: You do not need to interact with this file for this Module 1 work,
  which has no JS requirements for it.
***************************************************************************/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'sc-text-box-standard',
  templateUrl: './text-box-standard.component.html',
  styleUrls: ['./text-box-standard.component.scss'],
})
export class TextBoxStandardComponent {
  @Input()
  inputName: string = '';

  @Input()

  inputId :string ="";

  @Input()
  inputPlaceholder: string ="";
}
