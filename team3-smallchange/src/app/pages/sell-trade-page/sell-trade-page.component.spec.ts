import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellTradePageComponent } from './sell-trade-page.component';

describe('SellTradePageComponent', () => {
  let component: SellTradePageComponent;
  let fixture: ComponentFixture<SellTradePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellTradePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellTradePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
