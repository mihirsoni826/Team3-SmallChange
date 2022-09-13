import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerageSummaryComponent } from './brokerage-summary.component';

describe('BrokerageSummaryComponent', () => {
  let component: BrokerageSummaryComponent;
  let fixture: ComponentFixture<BrokerageSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ BrokerageSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
