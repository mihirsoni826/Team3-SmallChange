import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/data.service';
import { By } from "@angular/platform-browser";
import { of } from 'rxjs';
import { BrokerageTableComponent } from './brokerage-table.component';
import { TableHeaderComponent } from 'src/app/atoms/table-header/table-header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';


fdescribe('BrokerageTableComponent', () => {
  let component: BrokerageTableComponent;
  let fixture: ComponentFixture<BrokerageTableComponent>;
  let dataService: DataService;
  let debugElement: DebugElement;
  const fakeData = {"id":1,
                    "symbol": "MSFT",
                    "tradeDate": "07-09-22",
                    "price": 100,
                    "quantity": 5,
                    "investedAmt": 500,
                    "presentValue": 550,
                    "PL": "50(10%)"
                  };

  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,NgxPaginationModule],
      declarations: [ BrokerageTableComponent,TableHeaderComponent ],
      providers: [DataService]
      //schemas: [NO_ERRORS_SCHEMA]
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

  it('should render table data from TableHeaderComponent', () => {
    const spy = spyOn(dataService,'getBrokeragePortfolio').and.returnValue(of([fakeData]));
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
    fixture.detectChanges();

    const table = fixture.debugElement.queryAll(By.directive(TableHeaderComponent));

    expect(table.length).toBe(1);
    for(let i=0;i<table.length;i++) {
      expect(table[i].componentInstance.COLUMNS).toEqual(component.COLUMNS);
      expect(table[i].componentInstance.VALUES).toEqual(component.VALUES);
    }
    
  })
});
