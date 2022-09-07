import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-input-form-control',
  templateUrl: './label-input-form-control.component.html',
  styleUrls: ['./label-input-form-control.component.css']
})
export class LabelInputFormControlComponent implements OnInit {

  @Input() labelFor: string = "~";
  @Input() labelTxt: string = "~";
  @Input() inputName: string = "~";

  constructor() { }

  ngOnInit(): void {
  }

}
