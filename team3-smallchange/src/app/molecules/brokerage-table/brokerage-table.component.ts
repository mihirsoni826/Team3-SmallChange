import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-brokerage-table',
  templateUrl: './brokerage-table.component.html',
  styleUrls: ['./brokerage-table.component.css']
})
export class BrokerageTableComponent implements OnInit {

  COLUMNS: string[] = ['Serial No','Symbol','TradeDate','Price','Quantity','Buy value','Present value','P&L(%)']

  VALUES = [];
  links = ['Equity', 'Mutual-funds'];
  activeLink = this.links[0];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBrokeragePortfolio().subscribe((response) => {
      this.VALUES = response;
    })
  }


}
