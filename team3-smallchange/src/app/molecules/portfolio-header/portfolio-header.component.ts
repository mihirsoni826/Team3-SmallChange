import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit {

  current = 'Current Portfolio';
  invested = 'Invested Amount';

  currentValue: number = 0;
  investedValue: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPortfolioDataFromApi().subscribe((response) => { 
       for(let row of response) {
          this.investedValue += row['quantity'] * row['avg_buy_price'];
          this.currentValue += row['quantity'] * row['security']['marketPrice'];
       }
    })
  }
}
