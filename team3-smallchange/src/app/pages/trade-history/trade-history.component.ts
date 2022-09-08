
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {

  constructor(private dataService: DataService) { }

  btType = 'button'
  btValue = 'Go'  
  OPTIONS1: string[] = ["Brokerage", "401K", 'IRAs','HSAs']
  OPTIONS2: string[] = ["Asset1", "Asset2", "Asset3", "Asset4"]
  OPTIONS3: string[] = ["Buy", "Sell"]

  labelTxt1: string = 'By Account'
  labelTxt2: string = 'By Asset Class'
  labelTxt3: string = 'By Trade'

  labelForA: string = 'account'
  labelForB: string = 'asset'
  labelForC: string = 'trade'

  selectNameA: string = "Account"
  selectNameB: string = "Asset"
  selectNameC: string = "Trade"

  VALUES = []
  COLUMNS: string[] = ['Serial No.', 'Trade Name', 'Account', 'DOP', 'DOS', 'Buy/Sell', 'Assest Class', 'Bought at', 'Sold at', 'Quantity']

  ngOnInit(): void {
    this.dataService.getTradeHistory().subscribe((response) => {
      this.VALUES = response
      console.log(this.VALUES)
    })
  }

}