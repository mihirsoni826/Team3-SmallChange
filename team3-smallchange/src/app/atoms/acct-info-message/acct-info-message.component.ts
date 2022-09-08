import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acct-info-message',
  templateUrl: './acct-info-message.component.html',
  styleUrls: ['./acct-info-message.component.css']
})
export class AcctInfoMessageComponent implements OnInit {

  @Input()
  acctData: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
