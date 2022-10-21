import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-all-charts',
  templateUrl: './all-charts.component.html',
  styleUrls: ['./all-charts.component.css']
})
export class AllChartsComponent implements OnInit {

  accountData = [3300,1100];
  equityData = [];
  mfData = [];

  accountLabels = ["Equity", "Mutual Funds"];
  equityLabels = [];
  mfLabels = [];

  equitybrokerageData = [];
  mfbrokerageData = [];

  acctLabel = 'Account';
  equityLabel = 'Equity';
  mfLabel = 'Mutual Funds';

  constructor(private dataService: DataService) {
   }

  ngOnInit(): void {
    this.dataService.getBrokeragePortfolio().subscribe((response) => {
      this.equitybrokerageData = response;

      for(let data of this.equitybrokerageData){
        //this.equityLabels.push(data['symbol']);
        this.equityLabels = [...this.equityLabels, data['symbol']];
        this.equityData = [...this.equityData, data['presentValue']];
      }
    })

    this.dataService.getMFPortfolio().subscribe((response) => {
      this.mfbrokerageData = response;

      for(let data of this.mfbrokerageData){
        this.mfLabels = [...this.mfLabels, data['symbol']];
        this.mfData = [...this.mfData, data['presentValue']];
      }
    })
  }

}
