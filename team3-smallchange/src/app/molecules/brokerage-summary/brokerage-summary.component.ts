import { Location } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-brokerage-summary',
  templateUrl: './brokerage-summary.component.html',
  styleUrls: ['./brokerage-summary.component.css']
})
export class BrokerageSummaryComponent implements OnInit {

  labelTxt1 = 'Invested Value';
  labelFor1 = 'InvestedAmt';

  labelTxt2 = 'Current Value';
  labelFor2 = 'currentAmt';

  labelTxt3 = 'P & L';
  labelFor3 = 'PL';
  
  
  difference : number = 0;
  PL: any;
  brokerageType = 'Equity';
  investedValue;
  currentValue;

  constructor(private dataService: DataService,public location: Location) {
   }

   
  ngOnInit(): void {
    this.loadData();
    this.location.onUrlChange(url => {
      console.log(url.split('/').pop());
      this.brokerageType = url.split('/').pop();
      if(url.split('/').pop() == 'Mutual-funds') {
        this.brokerageType = 'Mutual Funds';
      }
      this.loadData();
    });
  }

  loadData():void {
    let invested = 0;
      let current = 0;

      this.dataService.getPortfolioDataFromApi().subscribe((response) => {
        for(let row of response) {
          if(row['security']['subAccountType'] == this.brokerageType) {
            invested += row['quantity'] * row['avg_buy_price'];
            current += row['quantity'] * row['security']['marketPrice'];
          }
        }

        this.investedValue = invested;
        this.currentValue = current;

        this.difference = current - invested;
        const num =  this.difference.toFixed(2);
        let percentageChange = 0;
        if(this.difference != 0) {
          percentageChange = ((this.difference / invested) * 100);
        }
        
        const pc = '(' + percentageChange.toFixed(2) + '%' + ')';
        this.PL = (this.difference > 0) ? ("+" + num + pc) : (num + pc);
      })
  }
}
