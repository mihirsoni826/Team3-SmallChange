/**************************************************************************
  Note: You do not need to interact with this file for this Module 1 work,
  which has no JS requirements for it.
***************************************************************************/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'sc-atom-form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.scss']
})
export class FormLabelComponent {

  @Input()
  labelTxt: string = "~not assigned~";

  @Input()
  labelFor: string = "~not assigned~";

}