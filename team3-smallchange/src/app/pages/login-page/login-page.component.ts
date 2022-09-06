
// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck
import { Component, OnInit, Output } from '@angular/core';

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
  COLUMNS : string[] = ['name1', 'name2', 'name3','name4']
}