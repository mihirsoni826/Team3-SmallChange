import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-trade-form',
  templateUrl: './buy-trade-form.component.html',
  styleUrls: ['./buy-trade-form.component.css']
})
export class BuyTradeFormComponent implements OnInit {

  price: number = 0;
  insufficientBalance: boolean = true;
  securityPrice: number = 0;

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

  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.securityPrice = Math.floor(Math.random() * (max - min + 1) + min);
  }

}
