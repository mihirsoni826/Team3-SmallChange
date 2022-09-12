
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

  btType = 'button'
  btType1 = 'button'
  btValue = 'Go'
  btValue1 = 'Reset'
  OPTIONS1: string[] = ["Brokerage", "401K", 'IRAs', 'HSAs']
  OPTIONS2: string[] = ["Asset1", "Asset2", "Asset3", "Asset4"]
  OPTIONS3: string[] = ["Buy", "Sell"]

  labelTxt1: string = 'By Account'
  labelTxt2: string = 'By Asset Class'
  labelTxt3: string = 'By Trade'

  filterId1 = 'filter1'
  filterId2 = 'filter2'
  filterId3 = 'filter3'

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

    console.log(this.accountValue)
    console.log(this.assetValue)
    console.log(this.tradeValue)
    
    this.accountValue = false
    this.assetValue = false
    this.tradeValue = false

    this.accountFilterState = 'inactive'
    this.assetFilterState = 'inactive'
    this.tradeFilterState = 'inactive'

    this.accountType= 'All'
    this.assetType = 'All'
    this.tradeType = 'All'

    this.dataService.getTradeHistory().subscribe((response) => {
      this.VALUES = response
      this.TABLE = response
      this.TEMP = response
    })

    console.log(this.dataService.reset)
   this.dataService.reset.selectedIndex = -1
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
    const filterBtn = document.getElementById(filter);
    filterBtn?.addEventListener('click', () => {
      this.dataService.selectedDropDown$.subscribe((value) => {
        this.dropdownValue = value;
        this.selectedFilter(value)
      });
    })
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
    if (this.assetValue) {
      if (this.assetFilterState == 'active') {
        this.TEMP = this.TABLE
      }
      this.VALUES = []
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