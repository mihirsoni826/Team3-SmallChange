
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {

  constructor(private dataService: DataService) { }
  selectedValue: string = 'Select Type of Account';

  OPTIONS1: string[] = ["Brokerage", "401K", 'IRAs', 'HSAs', 'Roth IRAs']
  OPTIONS2: string[] = ["Main Index Stocks", "Small Cap Company Stocks", "International Market Stocks", "Government Stocks", "Corporate Stocks"]
  OPTIONS3: string[] = ["Buy", "Sell"]

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

  accountFilterState = 'inactive'
  assetFilterState = 'inactive'
  tradeFilterState = 'inactive'

  dropdownValue = ''
  VALUES: any = []
  TEMP: any = []
  TABLE: any = []

  COLUMNS: string[] = ['Serial No.', 'Trade Name', 'Account', 'DOP', 'DOS', 'Buy/Sell', 'Assest Class', 'Bought at', 'Sold at', 'Quantity']
  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    for (var i = 1; i < 4; i++) {
      var temp = document.getElementById("filter" + i) as HTMLSelectElement
      temp.selectedIndex = 0
    }

    this.accountValue = false
    this.assetValue = false
    this.tradeValue = false

    this.accountFilterState = 'inactive'
    this.assetFilterState = 'inactive'
    this.tradeFilterState = 'inactive'

    this.accountType = 'All'
    this.assetType = 'All'
    this.tradeType = 'All'

    this.dataService.getTradeHistory().subscribe((response) => {
      this.VALUES = response
      this.TABLE = response
      this.TEMP = response
    })
  }
  reset() {
    for (var i = 1; i < 4; i++) {
      var temp = document.getElementById("filter" + i) as HTMLSelectElement
      temp.selectedIndex = 0
    }
    this.getAll()
  }

  selectedFilter(value: string) {

    if (this.OPTIONS1.includes(value)) {
      this.accountType = value
      this.accountValue = true
    }
    if (this.OPTIONS2.includes(value)) {
      this.assetType = value
      this.assetValue = true
    }
    if (this.OPTIONS3.includes(value)) {
      this.tradeType = value
      this.tradeValue = true
    }
  }

  applyFilters(filter: string) {
    const filterBtn = document.getElementById(filter) as HTMLSelectElement;
    this.selectedFilter(filterBtn.value)
  }


  getFilteredTable() {

    this.VALUES = []
    if (this.accountValue) {
      if (this.accountFilterState == 'active') {
        this.TEMP = this.TABLE
      }
      for (var i = 0; i < this.TEMP.length; i++) {
        if (this.accountValue && this.TEMP[i].acc == this.accountType) {
          this.VALUES.push(this.TEMP[i])
          this.accountFilterState = 'active'
        }

      }
      this.TEMP = this.VALUES
    }
    console.log(this.assetValue)
    if (this.assetValue) {
      if (this.assetFilterState == 'active') {
        this.TEMP = this.TABLE
      }
      this.VALUES = []
      console.log(this.VALUES)
      for (var i = 0; i < this.TEMP.length; i++) {
        if (this.assetValue && this.TEMP[i].asset == this.assetType) {
          this.VALUES.push(this.TEMP[i])
          this.assetFilterState = 'active'
        }

      }
      this.TEMP = this.VALUES
    }
    if (this.tradeValue) {
      if (this.tradeFilterState == 'active') {
        this.TEMP = this.TABLE
      }
      this.VALUES = []
      for (var i = 0; i < this.TEMP.length; i++) {
        if (this.tradeValue && this.TEMP[i].bs == this.tradeType) {
          this.VALUES.push(this.TEMP[i])
          this.tradeFilterState = 'active'
        }
      }
      this.TEMP = this.VALUES
    }

    this.accountValue = false
    this.assetValue = false
    this.tradeValue = false
  }
}