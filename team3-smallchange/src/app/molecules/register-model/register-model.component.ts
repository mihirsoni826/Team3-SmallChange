import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-model',
  templateUrl: './register-model.component.html',
  styleUrls: ['./register-model.component.css']
})
export class RegisterModelComponent implements OnInit {
  @Input() display: string = '';
  @Input() value: string;
  @Input() form: any = {};
  @Input() modalSuccess: boolean = false;
  @Output() btnCloseClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.modalSuccess)
  }
  onCloseClick(eve: Event) {
    eve.preventDefault();
    this.btnCloseClick.emit();
  }

}
