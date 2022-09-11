import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {

  OPTIONS: string[] = ["Select Type of Account", "Brokerage", "401k", "IRAs", "Roth IRAs", "HSAs"];
  selectName = 'acctType';
  labelTxt : string = 'By Account';
  labelForA: string = 'account';

  dropdownValue = 'Select Type of Account';
  noData = "Report is empty";
  noAcct = 'select account to show';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      this.dataService.selectedDropDown$.subscribe((value) => {
        this.dropdownValue = value;
      });
  }

}
