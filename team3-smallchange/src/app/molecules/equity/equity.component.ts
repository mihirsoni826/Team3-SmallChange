import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Output, EventEmitter } from '@angular/core';
import { values } from 'lodash';

@Component({
  selector: 'app-equity',
  templateUrl: './equity.component.html',
  styleUrls: ['./equity.component.css']
})
export class EquityComponent implements OnInit {

  COLUMNS: string[] = ['Symbol','Quantity','Buy Avg.','Buy value','LTP','Present value','P&L(%)']

  VALUES = [];
  equityObj = {};

  investedValue;
  currentValue;
  difference : number = 0;
  PL: any;
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPortfolioDataFromApi().subscribe((response) => {
       for(let row of response) {
          if(row['security']['subAccountType'] == 'Equity') {
            this.investedValue = (row['quantity'] * row['avg_buy_price']).toFixed(2);
           this.currentValue = (row['quantity'] * row['security']['marketPrice']).toFixed(2);

            this.difference = this.currentValue - this.investedValue;
            const num =  this.difference.toFixed(2);
            const percentageChange = ((this.difference / this.investedValue) * 100).toFixed(2);
            const str = '(' + percentageChange + '%' + ')';
            this.PL = (this.difference > 0) ? ("+" + num + str) : (num + str);
          
            this.equityObj = {
                symbol: row['security']['ticker'],
                quantity: row['quantity'],
                buyAvg: row['avg_buy_price'],
                investedAmt: this.investedValue,
                LTP: row['security']['marketPrice'],
                presentValue: this.currentValue,
                PL: this.PL
            }
            this.VALUES.push(this.equityObj);
        }
       }
    })
  }
}
