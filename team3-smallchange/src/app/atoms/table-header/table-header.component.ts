import { Component, Input, OnInit } from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  constructor() { }
  
  @Input()
  COLUMNS: string[] = []

  @Input()
  VALUES : Array<any> = []

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  ngOnInit(): void {
    
  }

}
