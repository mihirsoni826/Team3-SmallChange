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
  brokerageData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBrokeragePortfolio().subscribe((response) => {
      this.brokerageData = response;
      console.log(this.brokerageData);

      for(let data of this.brokerageData){
        this.investedValue += data['investedAmt'];
        this.currentValue += data['presentValue'];
      }

    })
  }

}
