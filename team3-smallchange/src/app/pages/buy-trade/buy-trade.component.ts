import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buy-trade',
  templateUrl: './buy-trade.component.html',
  styleUrls: ['./buy-trade.component.css']
})
export class BuyTradeComponent implements OnInit {

  price: number = 0;
  assetClassList: string[] = [
    "Main index stocks",
    "Small cap company stocks",
    "International market stocks",
    "Government bonds",
    "Corporate bonds"
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
