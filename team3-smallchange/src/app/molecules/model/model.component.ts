import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from 'src/app/data.service';

import { BuyTradeFormComponent } from 'src/app/organisms/buy-trade-form/buy-trade-form.component';


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  constructor(private http: HttpClient, private dataService : DataService) {}

  @Input() display: string = '';
  @Input() value: string;
  @Input() form: any = {};
  @Input() modalSuccess: boolean = false;
  @Input() tradeAction: string = ''; // sale or purchase

  @Output() btnYesClick = new EventEmitter<string>();
  @Output() btnNoClick = new EventEmitter<string>();
  @Output() btnCloseClick = new EventEmitter<string>();
  @Output() insufficientSecurityClick = new EventEmitter<string>();

  
  receivableOrPayable: string = '';
  valueNumber: number = 0;
  priceFromForm: number = 0;
  qtyFromForm: number = 0;
  isSecurity: boolean =false;
  feeApplicable: boolean = false;

  ngOnInit(): void {
    if (this.tradeAction === 'Sale') {
      this.receivableOrPayable = 'Receivable';
      
    } else if (this.tradeAction === 'Purchase') {
      this.receivableOrPayable = 'Payable';
    }
  }

  setTotalValue(price: number, quantity: number): void {
    this.priceFromForm = price;
    this.qtyFromForm = quantity;

    let transactionValue = price * quantity;

    if(this.feeApplicable) {
      transactionValue += transactionValue * 0.0025;
      document.getElementById('feeWarning').innerHTML = "Brokerage fee: 0.25%";
    }

    this.valueNumber = Math.round(transactionValue * 100) / 100;

    // Brokerage fee: 0.25%
    
    document.getElementById('totalValueTransaction').innerHTML = " ₹" + this.valueNumber.toString();
    
  }

  onYesClick(eve: Event) {
    eve.preventDefault();

    if (this.tradeAction === 'Sale') {
      const sellUrl = "http://localhost:8080/sell-trade";
      let accWithBracket: string = this.form.bankAccount.split("(")[1];
      let accNumber: string = accWithBracket.substring(0, accWithBracket.length - 1);
      let payload = {
        "security": {
          "ticker": this.form.security,
        },
        "user": {
          "email": localStorage.getItem("userEmail")
        },
        "quantity": this.form.quantity,
        "accountNumber": accNumber,
        "timeInMilliseconds": Date.now(),
       
      }
  
      let dataSource = this.http.post(sellUrl, payload);
  
      let data = dataSource.subscribe(async (response: boolean) => {
        console.log(response);
      if(response == false)
        this.insufficientSecurityClick.emit();
      else
      this.btnYesClick.emit();
      })
  
    
      // this.performSellTransaction();
     
     
    } else if (this.tradeAction === 'Purchase') {
      this.btnYesClick.emit();
      this.performBuyTransaction();
    }

    
    
  }
  onNoClick(eve: Event) {
    eve.preventDefault();
    this.btnNoClick.emit();
  }

  onCloseClick(eve: Event) {
    eve.preventDefault();
    this.btnCloseClick.emit();
  }

  // portfolioExceeds5000(): boolean {

  //   const url = "http://localhost:8080/portfolio";
  //   const payload = {"email": localStorage.getItem('userEmail')}
  //   let investedValue = 0;
  //   let res: boolean = false;

  //   let dataSource = this.http.post(url, payload);

  //   let data = dataSource.subscribe(async (response: any) => {
  //     for(let row of response) {
  //       investedValue += row['quantity'] * row['avg_buy_price'];
  //     }
  //     res = investedValue > 5000
  //   })
  //   return res;
  // }

  async performBuyTransaction() {
    console.log(this.form);

      const url = "http://localhost:8080/portfolio";
      const payload = {"email": localStorage.getItem('userEmail')}
      let investedValue = 0;
  
      let dataSource = this.http.post(url, payload);
  
      let data = dataSource.subscribe(async (response: any) => {
        for(let row of response) {
          investedValue += row['quantity'] * row['avg_buy_price'];
        }
        this.feeApplicable = investedValue > 5000
        console.log(this.feeApplicable);
        

        const buyUrl = "http://localhost:8080/buy-trade";
        let accWithBracket: string = this.form.bankAccount.split("(")[1];
        let accNumber: string = accWithBracket.substring(0, accWithBracket.length - 1);
        let payload = {
          "security": {
            "ticker": this.form.security,
          },
          "user": {
            "email": localStorage.getItem("userEmail")
          },
          "quantity": this.form.quantity,
          "accountNumber": accNumber,
          "timeInMilliseconds": Date.now(),
          "feeApplicable": this.feeApplicable
        }

        let dataSource = this.http.post(buyUrl, payload);

        let data = dataSource.subscribe(async (response: boolean) => {
          console.log(response);
        })
      })

  }

}