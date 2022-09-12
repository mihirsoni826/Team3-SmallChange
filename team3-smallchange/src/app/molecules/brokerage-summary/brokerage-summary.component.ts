import { Component, OnInit } from '@angular/core';

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
  
  investedValue = '$10000';
  currentValue = '$10500';
  PL = '$500(5%)';
  
  constructor() { }

  ngOnInit(): void {
  }

}
