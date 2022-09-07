import { Component, Input, OnInit } from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  constructor() { }
  unsorted(){}

  ngOnInit(): void {
  }
  @Input()
  VALUES : Array<any> = []

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
