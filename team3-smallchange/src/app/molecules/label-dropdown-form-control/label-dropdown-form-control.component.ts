import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output()
  dropdownOption = new EventEmitter<string>()

  selectedFilter(filter:string){
    this.dropdownOption.emit(filter)
  }


  constructor() { }

  ngOnInit(): void {
  }
}
