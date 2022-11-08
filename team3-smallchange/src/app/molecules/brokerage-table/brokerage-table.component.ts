import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-brokerage-table',
  templateUrl: './brokerage-table.component.html',
  styleUrls: ['./brokerage-table.component.css']
})
export class BrokerageTableComponent implements OnInit {
  links = ['Equity', 'Mutual-funds'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  
  }


}
