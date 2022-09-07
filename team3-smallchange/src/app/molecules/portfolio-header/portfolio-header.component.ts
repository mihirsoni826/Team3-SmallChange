import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit {

  username = 'Welcome, John Doe';
  totalValue = 'Total asset value: $10000';
  
  constructor() { }

  ngOnInit(): void {
  }

}
