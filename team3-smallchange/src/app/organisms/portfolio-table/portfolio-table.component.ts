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

  btType = 'submit';
  btValue = 'Go';
  dropdownValue: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const filterBtn = document.getElementById('Btn');

    filterBtn?.addEventListener('click',() => {
      this.dataService.selectedDropDown$.subscribe((value) => {
        this.dropdownValue = value;
        console.log(this.dropdownValue)
      });
    })
  }

}
