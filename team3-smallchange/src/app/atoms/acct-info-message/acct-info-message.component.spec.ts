import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctInfoMessageComponent } from './acct-info-message.component';

describe('AcctInfoMessageComponent', () => {
  let component: AcctInfoMessageComponent;
  let fixture: ComponentFixture<AcctInfoMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcctInfoMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcctInfoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
