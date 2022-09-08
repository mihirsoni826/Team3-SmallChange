import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brokerage-table',
  templateUrl: './brokerage-table.component.html',
  styleUrls: ['./brokerage-table.component.css']
})
export class BrokerageTableComponent implements OnInit {

  COLUMNS: string[] = ['Serial No','Symbol','TradeDate','Price','Quantity','Buy value','Present value','P&L(%)']

  VALUES = [
    {'Serial No':1, 'Symbol': 'MSFT', 'Trade Date': '07-09-22','Price': '$100','Quantity': 5,'Invested amount': '$500','Present value': '$550','P&L(%)': '$50 (10%)'},
    {'Serial No':2, 'Symbol': 'MSFT', 'Trade Date': '07-09-22','Price': '$100','Quantity': 5,'Invested amount': '$500','Present value': '$550','P&L(%)': '$50 (10%)'},
    {'Serial No':3, 'Symbol': 'MSFT', 'Trade Date': '07-09-22','Price': '$100','Quantity': 5,'Invested amount': '$500','Present value': '$550','P&L(%)': '$50 (10%)'},
    {'Serial No':4, 'Symbol': 'MSFT', 'Trade Date': '07-09-22','Price': '$100','Quantity': 5,'Invested amount': '$500','Present value': '$550','P&L(%)': '$50 (10%)'}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
