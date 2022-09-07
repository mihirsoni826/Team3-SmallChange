import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerageTableComponent } from './brokerage-table.component';

describe('BrokerageTableComponent', () => {
  let component: BrokerageTableComponent;
  let fixture: ComponentFixture<BrokerageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerageTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
