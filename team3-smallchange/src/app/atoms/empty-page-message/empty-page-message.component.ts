import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-page-message',
  templateUrl: './empty-page-message.component.html',
  styleUrls: ['./empty-page-message.component.css']
})
export class EmptyPageMessageComponent implements OnInit {

  @Input()
  msg: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
