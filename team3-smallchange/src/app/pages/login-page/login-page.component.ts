
// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck
import { Component, OnInit, Output } from '@angular/core';
import {KeyValuePipe} from '@angular/common';

@Component({
  selector: 'sc-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public ngOnInit(): void {
    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function. */
    const body = document.getElementsByTagName("BODY")[0];
    body.style.padding = "0";
    body.style.margin = "0";


  }
  COLUMNS : string[] = ['Serial No.', 'Trade Name', 'Account','DOP', 'DOS', 'Buy/Sell', 'Assest Class', 'Bought at', 'Sold at', 'Quantity']
  VALUES = [
    {'id': '1', 'name': 'ABC', 'acc': 'savings', 'dop' : '05-09-2022', 'dos': '-', 'bs': 'Buy', 'assert': 'XYZ', 'bp' : '199', 'sp': '-', 'quantity': '10'}

  ]
}