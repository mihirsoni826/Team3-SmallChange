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
 
 
  price: number = 0;
  insufficientBalance: boolean = false;

  assetClassList: string[] = [
    "Main index stocks",
    "Small cap company stocks",
    "International market stocks",
    "Government bonds",
    "Corporate bonds"
  ];

  bankAccountList: string[] = [
    "HDFC Bank (01234456789)",
    "ICICI Bank (65437889243)",
  ];

  onSubmit(data: any): void {
    console.log(data);
  } 
}
