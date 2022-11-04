import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {

  OPTIONS: string[] = ["Select Type of Account", "Brokerage", "401k", "IRAs", "Roth IRAs", "HSAs"];
  selectName = 'acctType';
  labelTxt : string = 'By Account';
  labelForA: string = 'account';
  selectedValue: string = 'Brokerage';

  noData = "Report is empty";
  noAcct = 'select account to show';

  constructor() { }

  ngOnInit(): void {
      
  }

}
