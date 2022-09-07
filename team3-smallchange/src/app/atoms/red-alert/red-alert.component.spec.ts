import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedAlertComponent } from './red-alert.component';

describe('RedAlertComponent', () => {
  let component: RedAlertComponent;
  let fixture: ComponentFixture<RedAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
