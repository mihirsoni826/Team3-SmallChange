import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctTypeFilterComponent } from './acct-type-filter.component';

describe('AcctTypeFilterComponent', () => {
  let component: AcctTypeFilterComponent;
  let fixture: ComponentFixture<AcctTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcctTypeFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcctTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
