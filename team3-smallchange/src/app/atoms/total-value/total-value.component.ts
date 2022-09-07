import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-value',
  templateUrl: './total-value.component.html',
  styleUrls: ['./total-value.component.css']
})
export class TotalValueComponent implements OnInit {

  total_value = 10000;
  constructor() { }

  ngOnInit(): void {
  }

}
