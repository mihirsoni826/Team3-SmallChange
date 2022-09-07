import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellTradeFormComponent } from './sell-trade-form.component';

describe('SellTradeFormComponent', () => {
  let component: SellTradeFormComponent;
  let fixture: ComponentFixture<SellTradeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellTradeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellTradeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
