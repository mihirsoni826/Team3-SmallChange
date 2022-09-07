import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brokerage-table',
  templateUrl: './brokerage-table.component.html',
  styleUrls: ['./brokerage-table.component.css']
})
export class BrokerageTableComponent implements OnInit {

  COLUMNS: string[] = ['Serial No.','Ticker','Name','Trade Date','Price','Quantity','Buy value','Present value','P&L','P&L %']

  constructor() { }

  ngOnInit(): void {
  }

}
