import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-red-alert',
  templateUrl: './red-alert.component.html',
  styleUrls: ['./red-alert.component.css']
})
export class RedAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() boldBanner: String=" ";
  @Input() banner: String=" ";

}
