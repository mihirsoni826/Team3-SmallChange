import { Component, Input, OnInit } from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})

export class TableHeaderComponent implements OnInit {
  p = 1;
  constructor() { }
  
  @Input()
  COLUMNS: string[] = []

  @Input()
  VALUES : Array<any> = []

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
 
  getClassOf(val) {
    const n = val.length;
    if(val[n-2] == "%") {
      var splitted = val.split("(", 2);
      const pl = parseFloat(splitted[0]);
      if(pl < 0) 
        return 'text-red';
      else if(pl > 0)
        return 'text-green';
    }
    return 'black';
  }
 
  ngOnInit(): void {
    
  }

}
