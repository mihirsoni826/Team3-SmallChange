import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';

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

  ITEMS = ['savins, njfjnfjnf']
  selectedValue: string = 'Select Type of Account';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  selectChange() {
    this.dataService.getDropDownValue(this.selectedValue);
  }
  


}
