import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-all-charts',
  templateUrl: './all-charts.component.html',
  styleUrls: ['./all-charts.component.css']
})
export class AllChartsComponent implements OnInit {

  accountData = [];
  equityData = [];
  mfData = [];

  accountLabels = ["Equity", "Mutual Funds"];
  equityLabels = [];
  mfLabels = [];

  equitybrokerageData = [];
  mfbrokerageData = [];
  totalEquity = 0;
  totalMutualFund = 0;

  acctLabel = 'Account';
  equityLabel = 'Equity';
  mfLabel = 'Mutual Funds';
  dataPresent: Boolean = false;

  constructor(private dataService: DataService) {
   }

  ngOnInit(): void {
    this.dataService.getPortfolioDataFromApi().subscribe((response) => {
       if(response.length == 0) {
        this.dataPresent = false;
       }
       else {
        this.dataPresent = true;

        for(let row of response) {
            if(row['security']['subAccountType'] == 'Equity') {
              this.equityLabels = [...this.equityLabels, row['security']['ticker']];
              this.equityData = [...this.equityData, (row['quantity'] * row['security']['marketPrice'])];
            }
            else {
              this.mfLabels = [...this.mfLabels, row['security']['ticker']];
              this.mfData = [...this.mfData, (row['quantity'] * row['security']['marketPrice'])];
            }
        }
            
          var equitySum = this.equityData.reduce(function (x, y) {
            return x + y;
          }, 0);   
          
          var mfSum = this.mfData.reduce(function (x, y) {
            return x + y;
          }, 0); 

          this.accountData = [...this.accountData,equitySum,mfSum];
      }
    })
  }

}
