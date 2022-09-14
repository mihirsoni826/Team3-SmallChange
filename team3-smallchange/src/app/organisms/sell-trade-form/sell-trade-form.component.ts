import { Component, OnInit,ElementRef ,Renderer2, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sell-trade-form',
  templateUrl: './sell-trade-form.component.html',
  styleUrls: ['./sell-trade-form.component.css']
})
export class SellTradeFormComponent {



  @ViewChild('buyForm', { static: true }) buyForm: FormGroup;
  @ViewChild('assetClass', { static: true }) assetClass: FormControl;
  @ViewChild('security', { static: true }) security: FormControl;
  @ViewChild('quantity', { static: true }) quantity: FormControl;
  @ViewChild('bankAccount', { static: true }) bankAccount: FormControl;

  Success:boolean=false;

  constructor() {
   
   }
  
  ngOnInit(): void {
   
  }

    dis:string="";

  toggleModalDisplay()
  {

    this.dis="display:flex";
  }

  toggleModalDisplayOnYes(buyForm: any)
  {

    this.dis="display:flex";
    this.Success=true;
  }

  toggleModalDisplayOnNo()
  {

    this.dis="";
  
  }

  closeBtn(buyForm: any){
    this.dis="";
    this.Success=false;
    buyForm.resetForm();
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
