import { Component, OnInit,Input , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor() { }

  @Input()
  display :string="";
  @Output()
  btnYesClick = new EventEmitter<string>;
  @Output()
  btnNoClick = new EventEmitter<string>;
  
  ngOnInit(): void {
  }

  onYesClick(eve :Event)
  {
    eve.preventDefault();
    this.btnYesClick.emit();
  }
  onNoClick(eve :Event)
  {
    eve.preventDefault();
    this.btnNoClick.emit();
  }
}
