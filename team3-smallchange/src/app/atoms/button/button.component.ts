/**************************************************************************
  Note: You do not need to interact with this file for this Module 1 work,
  which has no JS requirements for it.
***************************************************************************/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'sc-atom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input()
  btType: string ="";

  @Input()
  btValue: string ="";
  
}