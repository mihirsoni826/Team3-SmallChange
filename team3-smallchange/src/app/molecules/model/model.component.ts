import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  constructor() {}

  @Input() display: string = '';
  @Input() value: string;
  @Input() form: any = {};
  @Input() modalSuccess: boolean = false;
  @Input() tradeAction: string = ''; // sale or purchase

  @Output() btnYesClick = new EventEmitter<string>();
  @Output() btnNoClick = new EventEmitter<string>();
  @Output() btnCloseClick = new EventEmitter<string>();
  
  receivableOrPayable: string = '';
  valueNumber: number;

  ngOnInit(): void {
    this.valueNumber = +this.value;

    if (this.tradeAction === 'Sale') {
      this.receivableOrPayable = 'Receivable';
    } else if (this.tradeAction === 'Purchase') {
      this.receivableOrPayable = 'Payable';
    }
  }

  onYesClick(eve: Event) {
    eve.preventDefault();
    this.btnYesClick.emit();
  }
  onNoClick(eve: Event) {
    eve.preventDefault();
    this.btnNoClick.emit();
  }

  onCloseClick(eve: Event) {
    eve.preventDefault();
    this.btnCloseClick.emit();
  }
}
