import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
