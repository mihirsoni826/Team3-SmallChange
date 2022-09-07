import { Component, OnInit,ElementRef ,Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sell-trade-form',
  templateUrl: './sell-trade-form.component.html',
  styleUrls: ['./sell-trade-form.component.css']
})
export class SellTradeFormComponent {

  
  constructor() {
   
   }
  
  ngOnInit(): void {
   
  }

    dis:string="";

  model()
  {

    if(this.dis.length)
    this.dis="";
    else
   this.dis="display:flex"
  }
 
 

}
