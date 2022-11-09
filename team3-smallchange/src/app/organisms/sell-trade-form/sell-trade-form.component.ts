import { Component, OnInit,ElementRef ,Renderer2, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ModelComponent } from 'src/app/molecules/model/model.component'; 

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

  price: number = 123;
  insufficientSecurity: boolean = false;
  securityPrice: number = 0;
  securityName: String = "";
  dis: string = '';

  tickers: String[] = [];
  tickerDetailsMap: Map<String, any[]> = new Map<String, any[]>;

  bankAccountList: string[] = [];
  accountBalanceMap: Map<string, number> = new Map<string, number>;

  totalValueOfTransaction: number = 0;
  accNumberWithoutBrackets: string = "";


  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.fetchTickersFromDB();
    this.fetchBankAccountDetails();
   
  }

  toggleModalDisplay(buyForm: any)
  {
    this.dis="display:flex";

    let accWithBracket: string = buyForm.value.bankAccount.split("(")[1];
    this.accNumberWithoutBrackets = accWithBracket.substring(0, accWithBracket.length - 1);
    
    this.totalValueOfTransaction = this.securityPrice * this.quantity.value;
    
    let mc: ModelComponent = new ModelComponent(null);
    mc.setTotalValue(this.securityPrice, this.quantity.value);
  }

  toggleModalDisplayOnYes(buyForm: any)
  {
    this.insufficientSecurity=false;
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
 
  insuffSecurity()
  {
    this.dis="";
    this.insufficientSecurity=true;

  }

  assetClassList: string[] = [
    "Main index stocks",
    "Small cap company stocks",
    "International market stocks",
    "Government bonds",
    "Corporate bonds"
  ];

  onSubmit(data: any): void {
    console.log(data);
  } 

  updateSecurityMarketPrice(security: any): void {
    
    let tickerSelected: String = security.control.value;
    let priceNameArr: any[] = this.tickerDetailsMap.get(tickerSelected);
    if(priceNameArr == undefined) {
      this.securityPrice = 0;
      this.securityName = "";
    }
    else {
      this.securityPrice = priceNameArr[0];
      this.securityName = priceNameArr[1];
    }
  }



  async fetchTickersFromDB() {
    const securitiesUrl = 'http://localhost:8080/securities';
    let dataSource = this.http.get(securitiesUrl);
    let data = dataSource.subscribe(async (response: any) => {
        for (let i = 0; i < response.length; i++) {
          const security = response[i];
          let tempArr: any[] = [security.marketPrice, security.securityName];
          this.tickerDetailsMap.set(security.ticker, tempArr);
          this.tickers.push(security.ticker);
        }
    })
    this.tickerDetailsMap.set("", undefined);
  }

  async fetchBankAccountDetails() {
    const bankDetailsUrl = "http://localhost:8080/bank-details";
    let payload = {"email": "123@gmail.com"}
    let dataSource = this.http.post(bankDetailsUrl, payload);
    let data = dataSource.subscribe(async (response: any) => {
      for(let i = 0; i < response.length; i++) {

        let accountNameNumber: string = response[i].bankName + " (" + response[i].accountNumber + ")";
        this.accountBalanceMap.set(response[i].accountNumber, response[i].balance);
        this.bankAccountList.push(accountNameNumber);

      }
    })
  }
}
