import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buy-trade-form',
  templateUrl: './buy-trade-form.component.html',
  styleUrls: ['./buy-trade-form.component.css'],
})
export class BuyTradeFormComponent implements OnInit {
  @ViewChild('buyForm', { static: true }) buyForm: FormGroup;
  @ViewChild('assetClass', { static: true }) assetClass: FormControl;
  @ViewChild('security', { static: true }) security: FormControl;
  @ViewChild('quantity', { static: true }) quantity: FormControl;
  @ViewChild('bankAccount', { static: true }) bankAccount: FormControl;

  price: number = 0;
  insufficientBalance: boolean = false;
  securityPrice: number = 0;
  dis: string = '';
  success: boolean = false;

  assetClassList: string[] = [
    'Main index stocks',
    'Small cap company stocks',
    'International market stocks',
    'Government bonds',
    'Corporate bonds',
  ];

  bankAccountList: string[] = [
    'HDFC Bank (01234456789)',
    'ICICI Bank (65437889243)',
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(data: any): void {
    console.log(this.buyForm);
  }

  toggleModalDisplay() {
    this.dis = 'display: flex';
  }

  toggleModalDisplayOnYes(buyForm: any) {
    this.dis = 'display: flex';
    this.success = true;
  }

  toggleModalDisplayOnNo() {
    this.dis = '';
  }

  closeBtn(buyForm: any) {
    this.dis = '';
    this.success = false;
    buyForm.resetForm();
  }
}
