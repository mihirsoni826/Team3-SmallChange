import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-equity',
  templateUrl: './equity.component.html',
  styleUrls: ['./equity.component.css']
})
export class EquityComponent implements OnInit {

  COLUMNS: string[] = ['Serial No','Symbol','TradeDate','Price','Quantity','Buy value','Present value','P&L(%)']

  VALUES = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBrokeragePortfolio().subscribe((response) => {
      this.VALUES = response;
    })
  }

}
