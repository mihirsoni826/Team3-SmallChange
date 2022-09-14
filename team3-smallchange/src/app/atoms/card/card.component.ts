import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() imgSrc: string = "";
  @Input() cardTitle: string = "";
  @Input() cardSubText: string = "";
  @Input() imgId: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
