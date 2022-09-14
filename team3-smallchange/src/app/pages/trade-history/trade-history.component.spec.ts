import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs/internal/observable/of';
import {DataService} from '../../data.service'
import { TradeHistoryComponent } from './trade-history.component';

describe('TradeHistoryComponent', () => {
  let component: TradeHistoryComponent;
  let fixture: ComponentFixture<TradeHistoryComponent>;
  let mockDataService;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj(['getTradeHistory'])
    await TestBed.configureTestingModule({
      declarations: [ TradeHistoryComponent ],
      providers:[{
        provide: DataService,
        useValue : mockDataService
      }],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeHistoryComponent);
    mockDataService.getTradeHistory.and.returnValue(of({}))
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain dropdowns',()=>{
    let dropdown = fixture.nativeElement.querySelector("select");
        expect(dropdown).toBeTruthy();
  })

  it("should get dropdown value as 'Brokerage' when clicked",() => {
    let dValue = fixture.debugElement.query(By.css('select')); 
    expect(dValue.nativeElement.textContent).toContain('Brokerage');

  })
  it("should get dropdown value as 'Main Index Stocks' when clicked",() => {
    let dValue = fixture.debugElement.query(By.css('#filter2')); 
    expect(dValue.nativeElement.textContent).toContain('Main Index Stocks');
  })

  it("should get dropdown value as 'Sell' when clicked",() => {
    let dValue = fixture.debugElement.query(By.css('#filter3')); 
    expect(dValue.nativeElement.textContent).toContain('Sell');
  })

  it('should call getFilteredTable() method when clicked on Apply button',fakeAsync (()=>{
    let button = fixture.debugElement.query(By.css('#go'))
    spyOn(component, 'getFilteredTable');
    button.triggerEventHandler('click')
    tick()
     expect(component.getFilteredTable).toHaveBeenCalled();
  }))

  it('should call reset() method when clicked on Apply button',fakeAsync (()=>{
    let button = fixture.debugElement.query(By.css('#reset'))
    spyOn(component, 'reset');
    button.triggerEventHandler('click')
    tick()
     expect(component.reset).toHaveBeenCalled();
  }))
});
