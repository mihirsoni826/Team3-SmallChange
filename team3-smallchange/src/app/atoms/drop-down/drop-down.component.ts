import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  @Input()
  selectName: string = "";

  @Input()
  OPTIONS: string[] = [];

  @Output() 
  filter = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  selectedFilter(value:any){
    this.filter.emit(value);

  }
}
