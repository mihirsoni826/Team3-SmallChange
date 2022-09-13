import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/data.service';
import { By } from "@angular/platform-browser";
import { of } from 'rxjs';
import { BrokerageTableComponent } from './brokerage-table.component';
import { TableHeaderComponent } from 'src/app/atoms/table-header/table-header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';


describe('BrokerageTableComponent', () => {
  let component: BrokerageTableComponent;
  let fixture: ComponentFixture<BrokerageTableComponent>;
  let dataService: DataService;
  let bData;
  let debugElement: DebugElement;
  let mockDataService;

  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,NgxPaginationModule],
      declarations: [ BrokerageTableComponent,TableHeaderComponent ],
      providers: [DataService],
      schemas: [NO_ERRORS_SCHEMA]
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


  it('should render table from TableHeaderComponent', () => {
   const table = fixture.debugElement.queryAll(By.directive(TableHeaderComponent));
    expect(table.length).toEqual(1);
  })
});
