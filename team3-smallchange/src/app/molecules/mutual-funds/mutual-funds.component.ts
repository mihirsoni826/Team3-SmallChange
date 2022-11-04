import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-mutual-funds',
  templateUrl: './mutual-funds.component.html',
  styleUrls: ['./mutual-funds.component.css']
})
export class MutualFundsComponent implements OnInit {

  COLUMNS: string[] = ['Serial No','Symbol','TradeDate','Price','Quantity','Buy value','Present value','P&L(%)']

  VALUES = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMFPortfolio().subscribe((response) => {
      this.VALUES = response;
    })
  }

}
