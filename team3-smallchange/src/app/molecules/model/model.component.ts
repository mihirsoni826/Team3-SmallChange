import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @Input() display: string = '';
  @Input() value: string;
  @Input() form: any = {};
  @Input() modalSuccess: boolean = false;
  @Input() tradeAction: string = ''; // sale or purchase

  @Output() btnYesClick = new EventEmitter<string>();
  @Output() btnNoClick = new EventEmitter<string>();
  @Output() btnCloseClick = new EventEmitter<string>();
  
  receivableOrPayable: string = '';
  valueNumber: number = 0;
  priceFromForm: number = 0;
  qtyFromForm: number = 0;

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

    this.valueNumber = Math.round(price * quantity * 100) / 100;
    
    document.getElementById('totalValueTransaction').innerHTML = " ₹" + this.valueNumber.toString();
  }

  onYesClick(eve: Event) {
    eve.preventDefault();
    this.btnYesClick.emit();

    console.log(localStorage.getItem("token"));

    this.performBuyTransaction();
    
  }
  onNoClick(eve: Event) {
    eve.preventDefault();
    this.btnNoClick.emit();
  }

  onCloseClick(eve: Event) {
    eve.preventDefault();
    this.btnCloseClick.emit();
  }

  async performBuyTransaction() {
    const buyUrl = "http://localhost:8080/buy-trade";
    let accWithBracket: string = this.form.bankAccount.split("(")[1];
    let accNumber: string = accWithBracket.substring(0, accWithBracket.length - 1);
    let payload = {
      "security": {
        "ticker": this.form.security,
      },
      "user": {
        "email": "123@gmail.com"
      },
      "quantity": this.form.quantity,
      "accountNumber": accNumber,
      "timeInMilliseconds": Date.now(),
    }

    let dataSource = this.http.post(buyUrl, payload);

    let data = dataSource.subscribe(async (response: boolean) => {
      console.log(response);
    })

  }

  // async fetchBankAccountDetails() {
  //   const bankDetailsUrl = "http://localhost:8080/bank-details";
  //   let payload = {"email": "123@gmail.com"}
  //   let dataSource = this.http.post(bankDetailsUrl, payload);
  //   let data = dataSource.subscribe(async (response: any) => {
  //     let accountNameNumber: string = response.bankName + " (" + response.accountNumber + ")";
  //     this.bankAccountList.push(accountNameNumber);
  //   })
  // }
}