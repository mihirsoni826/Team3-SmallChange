import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acct-type-filter',
  templateUrl: './acct-type-filter.component.html',
  styleUrls: ['./acct-type-filter.component.css']
})
export class AcctTypeFilterComponent implements OnInit {

 
  OPTIONS: string[] = ["Select Type of Account", "Brokerage", "401k", "IRAs", "Roth IRAs", "HSAs"];
  selectName = 'acctType';

  btType = 'submit';
  btValue = 'Go';

  constructor() { }

  ngOnInit(): void {
  }  

}
