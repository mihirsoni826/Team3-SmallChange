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
  btnClick = new EventEmitter<string>;
  
  ngOnInit(): void {
  }

  onClick(eve :Event)
  {
    eve.preventDefault();
    this.btnClick.emit();
  }
}
