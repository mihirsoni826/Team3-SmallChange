
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {

  constructor(private dataService: DataService, private http: HttpClient) { }
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
  SORT: any = []

  COLUMNS: string[] = ['Trade Id.', 'Symbol', 'Company', 'Account', 'Date of Transaction(MM-DD-YYYY)', 'Buy/Sell', 'Assest Class', 'Trade Price', 'Quantity']
  ngOnInit(): void {
    this.getAll()
    this.getDataFromApi()
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

    
  }


  reset() {
    for (var i = 1; i < 4; i++) {
      var temp = document.getElementById("filter" + i) as HTMLSelectElement
      temp.selectedIndex = 0
    }
    this.getAll()
    this.getDataFromApi()
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
      console.log(this.tradeType)
      console.log(this.tradeValue)
    }
  }

  applyFilters(filter: string) {
    const filterBtn = document.getElementById(filter) as HTMLSelectElement;
    console.log(filterBtn.value)
    this.selectedFilter(filterBtn.value)
  }


  getFilteredTable() {

    this.VALUES = []
    if (this.accountValue) {
      if (this.accountFilterState == 'active') {
        this.TEMP = this.TABLE
      }
      for (var i = 0; i < this.TEMP.length; i++) {
        if (this.accountValue && this.TEMP[i].accountType == this.accountType) {
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
        if (this.assetValue && this.TEMP[i].assetClass == this.assetType) {
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
      console.log(this.TEMP)
      for (var i = 0; i < this.TEMP.length; i++) {
        if (this.tradeValue && this.TEMP[i].tradeType == this.tradeType) {
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

  async getDataFromApi(){
   var  apiURL = 'http://localhost:8080/trade-history';
   const body = {
    "email" : localStorage.getItem("userEmail")
   } 

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    var theDataSource = this.http
    .post(
      apiURL,
      body,
      httpOptions
    )
    var RESULT = [];
    var data = theDataSource.subscribe(async (response: any) => {
      for(var i=0; i<response.length; i++){
       var object =  {
          "transactionId" : response[i].transactionId,
          "ticker": response[i].ticker,
          "securityName" : response[i].securityName,
          "accountType" : response[i].accountType,
          "transactionDate" : response[i].transactionDate,
          "tradeType" : response[i].tradeType,
          "assetClass" : response[i].assetClass,
          "tradePrice": response[i].tradePrice,
          "quantity": response[i].quantity
        }
        RESULT.push(object)
      }
       
      this.SORT = RESULT
        this.TABLE = RESULT
        this.TEMP = RESULT
        this.VALUES = RESULT
        this.TABLE.sort(function(x,y){
          console.log(x.transactionDate - y.transactionDate)
          return y.transactionId - x.transactionId
        })
    }
    )
   
  }
}