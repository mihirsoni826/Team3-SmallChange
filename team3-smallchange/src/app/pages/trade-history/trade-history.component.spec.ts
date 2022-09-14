// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import {DataService} from '../../data.service'
// import { TradeHistoryComponent } from './trade-history.component';

// describe('TradeHistoryComponent', () => {
//   let component: TradeHistoryComponent;
//   let fixture: ComponentFixture<TradeHistoryComponent>;
//   let mockDataService;

//   beforeEach(async () => {
//     mockDataService = jasmine.createSpyObj(['getTradeHistory'])
//     await TestBed.configureTestingModule({
//       declarations: [ TradeHistoryComponent ],
//       providers:[{
//         provide: DataService,
//         useValue : mockDataService
//       }],
//       schemas:[CUSTOM_ELEMENTS_SCHEMA]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(TradeHistoryComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
