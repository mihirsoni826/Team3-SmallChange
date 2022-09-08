import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brokerage-summary',
  templateUrl: './brokerage-summary.component.html',
  styleUrls: ['./brokerage-summary.component.css']
})
export class BrokerageSummaryComponent implements OnInit {

  totalValue = 'Total Value: $10000';
  currentValue = 'Current Value: $10500';
  PL = '$500(5%)';
  
  constructor() { }

  ngOnInit(): void {
  }

}
