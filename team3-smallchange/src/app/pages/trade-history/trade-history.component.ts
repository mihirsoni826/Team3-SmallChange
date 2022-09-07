
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {

  constructor() { }
  OPTIONS1 : string[]= ["Savings", "Current"]
  OPTIONS2 : string[]= ["Asset1", "Asset2", "Asset3", "Asset4"]
  OPTIONS3 : string[]= ["Buy", "Sell"]

  labelTxt1 : string = 'By Account'
  labelTxt2 : string = 'By Asset Class'
  labelTxt3 : string = 'By Trade'

  labelForA: string = 'account'
  labelForB: string = 'asset'
  labelForC: string = 'trade'


  selectNameA: string = "Account"
  selectNameB: string = "Asset"
  selectNameC: string = "Trade"




  COLUMNS : string[] = ['Serial No.', 'Trade Name', 'Account','DOP', 'DOS', 'Buy/Sell', 'Assest Class', 'Bought at', 'Sold at', 'Quantity']
  VALUES = [
    {'id': '1', 'name': 'Apple', 'acc': 'savings', 'dop' : '05-09-2022', 'dos': '-', 'bs': 'Buy', 'assert': 'XYZ', 'bp' : '199', 'sp': '-', 'quantity': '10'},
    {'id': '2', 'name': 'Amazon', 'acc': 'current', 'dop' : '06-09-2022', 'dos': '-', 'bs': 'Buy', 'assert': 'XYZ', 'bp' : '199', 'sp': '-', 'quantity': '10'},
    {'id': '3', 'name': 'Google', 'acc': 'savings', 'dop' : '-', 'dos': '03-09-2022', 'bs': 'Sell', 'assert': 'XYZ', 'bp' : '199', 'sp': '-', 'quantity': '10'},
    {'id': '4', 'name': 'Tesla', 'acc': 'savings', 'dop' : '02-09-2022', 'dos': '-', 'bs': 'Buy', 'assert': 'XYZ', 'bp' : '199', 'sp': '-', 'quantity': '10'},
    {'id': '5', 'name': 'Dominos', 'acc': 'savings', 'dop' : '07-09-2022', 'dos': '-', 'bs': 'Buy', 'assert': 'XYZ', 'bp' : '199', 'sp': '-', 'quantity': '10'}

  ]

  ngOnInit(): void {
  }

}