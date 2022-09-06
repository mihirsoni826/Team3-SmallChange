import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-generic',
  templateUrl: './filter-generic.component.html',
  styleUrls: ['./filter-generic.component.css']
})
export class FilterGenericComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  labelTxt : string = 'Account Type'
  labelFor: string = 'account'
  selectName: string = "Account"
  OPTIONS : string[]= ["Account", "Brokerage"]
}
