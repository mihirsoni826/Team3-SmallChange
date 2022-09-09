import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-trade-form',
  templateUrl: './buy-trade-form.component.html',
  styleUrls: ['./buy-trade-form.component.css']
})
export class BuyTradeFormComponent implements OnInit {

  price: number = 0;
  insufficientBalance: boolean = false;

  assetClassList: string[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data: any): void {
    console.log(data);
  } 

}
