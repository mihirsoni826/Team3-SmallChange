import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-dropdown-form-control',
  templateUrl: './label-dropdown-form-control.component.html',
  styleUrls: ['./label-dropdown-form-control.component.css']
})
export class LabelDropdownFormControlComponent implements OnInit {

  @Input() labelTxt : string = '~';
  @Input() labelFor: string = '~';
  @Input() selectName: string = "~";
  @Input() OPTIONS : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
