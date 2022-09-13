import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/data.service';
import { By } from "@angular/platform-browser";
import { of } from 'rxjs';
import { BrokerageTableComponent } from './brokerage-table.component';
import { TableHeaderComponent } from 'src/app/atoms/table-header/table-header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';


describe('BrokerageTableComponent', () => {
  let component: BrokerageTableComponent;
  let fixture: ComponentFixture<BrokerageTableComponent>;
  let dataService: DataService;
  let bData;
  let debugElement: DebugElement;
  let mockDataService;

  beforeEach(async () => {
    bData = [
      {"id":1,
     "symbol": "MSFT",
     "tradeDate": "07-09-22",
     "price": 100,
     "quantity": 5,
     "investedAmt": 500,
     "presentValue": 550,
     "PL": "50(10%)"
    }
    ]

    mockDataService = jasmine.createSpyObj(['getBrokeragePortfolio'])
    
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ BrokerageTableComponent ],
      providers: [DataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataService = TestBed.get(DataService);
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create data service', () => {
    expect(dataService).toBeTruthy();
  });


  it('should render table as a TableHeaderComponent', async () => {
    let productSpy = spyOn(dataService, 'getBrokeragePortfolio').and.callThrough();
    component.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = debugElement.query(By.directive(TableHeaderComponent));
      console.log(value.nativeElement.textContent);
      expect(value.nativeElement.textContent).toContain(component.VALUES);
    })
  })


  

  // it('should render table as a TableHeaderComponent', () => {
  //   mockDataService.getBrokeragePortfolio.and.returnValue(of(bData));
  //   fixture.detectChanges();

  //  const brokerageComponentDEs = fixture.debugElement.queryAll(By.directive(TableHeaderComponent));  //component is a subclass of directive,this will fetch all the app-hero component attached to parent
  //  console.log("BC is",brokerageComponentDEs); 
  //  expect(brokerageComponentDEs.length).toEqual(1);
  //   for(let i=0;i<brokerageComponentDEs.length;i++) {
  //       expect(brokerageComponentDEs[i].componentInstance.VALUES).toEqual(bData[i]);
  //   }
  // });
});
