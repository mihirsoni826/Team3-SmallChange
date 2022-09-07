/**************************************************************************
  Note: You do not need to interact with this file for this Module 1 work,
  which has no JS requirements for it.
***************************************************************************/

import { Component,Input } from '@angular/core';

@Component({
  selector: 'sc-atom-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.scss']
})
export class HeaderTextComponent {

  @Input()
  headerText: string = '';
}
