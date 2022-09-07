import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-trade',
  templateUrl: './buy-trade.component.html',
  styleUrls: ['./buy-trade.component.css']
})
export class BuyTradeComponent implements OnInit {

  price: number = 0;

  assetClassList: string[] = [
    " -- Choose an asset class --",
    "Main index stocks",
    "Small cap company stocks",
    "International market stocks",
    "Government bonds",
    "Corporate bonds"
  ];

  bankAccountList: string[] = [
    "HDFC Bank (01234456789)",
    "ICICI Bank (65437889243)",
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  onSubmit(event: any): void {
    event.preventDefault();
    let inputValue = event.target["qty"].value;
    console.log(inputValue);
  } 
}
