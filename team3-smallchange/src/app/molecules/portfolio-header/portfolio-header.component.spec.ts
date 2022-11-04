import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mapTo, of, timer } from 'rxjs';
import { DataService } from 'src/app/data.service';

import { PortfolioHeaderComponent } from './portfolio-header.component';

fdescribe('PortfolioHeaderComponent', () => {
  let component: PortfolioHeaderComponent;
  let fixture: ComponentFixture<PortfolioHeaderComponent>;
  let dataService: DataService;

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
      imports: [HttpClientTestingModule],
      declarations: [ PortfolioHeaderComponent ],
      providers: [DataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataService = TestBed.get(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create card', () => {
    expect(fixture.nativeElement.querySelector('.card')).toBeTruthy();
  })

  it('should have brokerage data',() => {
    const spy = spyOn(dataService,'getBrokeragePortfolio').and.returnValue(of([fakeData]));
    component.ngOnInit();
    
    expect(spy).toHaveBeenCalled();
    expect(component.brokerageData).toEqual([fakeData]);
  })

  //using async
  it('should render current value', async(() =>{
    const spy = spyOn(dataService,'getBrokeragePortfolio').and.returnValue(of([fakeData]));
    component.ngOnInit();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = fixture.nativeElement.querySelector('#currentVal');
      expect(value).toBeTruthy();
      expect(value.textContent).toContain(component.currentValue);
    })
    
  }));

  //using fakeAsync
  it('should render invested value', fakeAsync(() => {
    const spy = spyOn(dataService,'getBrokeragePortfolio').and.returnValue(timer(1000).pipe(mapTo([fakeData])));
    component.ngOnInit();
    
    expect(spy).toHaveBeenCalled();
    fixture.detectChanges();

    const value = fixture.nativeElement.querySelector('#investedVal');
    expect(value).toBeTruthy();
    expect(value.textContent).toContain(component.investedValue);

    tick(1000); 
    discardPeriodicTasks(); 
  }));

});
