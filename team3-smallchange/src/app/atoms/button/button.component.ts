import { Component, Input } from '@angular/core';

@Component({
  selector: 'sc-atom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() btnType: string = '';
  @Input() btnValue: string = '';
  @Input() btnId: string = '';
  @Input() btnClass: string = '';
  @Input() isDisabled: boolean | null = false;
}
