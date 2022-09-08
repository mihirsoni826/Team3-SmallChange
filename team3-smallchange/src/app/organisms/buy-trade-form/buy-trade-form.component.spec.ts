import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTradeFormComponent } from './buy-trade-form.component';

describe('BuyTradeFormComponent', () => {
  let component: BuyTradeFormComponent;
  let fixture: ComponentFixture<BuyTradeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyTradeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTradeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
