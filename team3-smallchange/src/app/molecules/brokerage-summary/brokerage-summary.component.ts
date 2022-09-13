import { Component, OnInit } from '@angular/core';
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
  
  investedValue: number = 0;
  currentValue: number = 0;
  difference : number = 0;
  PL: any;
  
  brokerageData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBrokeragePortfolio().subscribe((response) => {
      this.brokerageData = response;
      console.log(this.brokerageData);

      for(let data of this.brokerageData){
        this.investedValue += data['investedAmt'];
        this.currentValue += data['presentValue'];
      }

      this.difference = this.currentValue - this.investedValue;
      const percentageChange = ((this.difference / this.investedValue) * 100).toPrecision(2);
      const str = '(' + percentageChange + '%' + ')';
      this.PL = (this.difference > 0) ? ("+" + this.difference + str) : (this.difference + str);
    })
  }
}
