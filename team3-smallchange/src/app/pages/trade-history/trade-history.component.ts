
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

  accountType: string = 'All'
  assetType: string = 'All'
  tradeType: string = 'All'

  accountValue = false
  assetValue = false
  tradeValue = false

  VALUES = []
  COLUMNS: string[] = ['Serial No.', 'Trade Name', 'Account', 'DOP', 'DOS', 'Buy/Sell', 'Assest Class', 'Bought at', 'Sold at', 'Quantity']

  ngOnInit(): void {
    this.dataService.getTradeHistory().subscribe((response) => {
      this.VALUES = response
      console.log(this.VALUES)
    })
  }

  selectedFilter(value:string){
    if(this.OPTIONS1.includes(value)){
      this.accountType = value
      this.accountValue = true
      // this.setFilterValue(value)
    }
    if(this.OPTIONS2.includes(value)){
      this.assetType = value
      this.assetValue = true
    }
    if(this.OPTIONS3.includes(value)){
      this.tradeType = value
      this.tradeValue = true
    }

    console.log(this.accountType)
    console.log(this.assetType)
    console.log(this.tradeType)
  }

  applyFilters(){
    // if(this.accountValue){
    //   if(this.tradeValue){
    //     if(this.assetValue){

    //     }
    //   }
    // }

  }
  getFilteredTable(v1:boolean,v2:boolean,v3:boolean){
    if(v1){
      
    }
  }
}