import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelInputFormControlComponent } from './label-input-form-control.component';

describe('LabelInputFormControlComponent', () => {
  let component: LabelInputFormControlComponent;
  let fixture: ComponentFixture<LabelInputFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelInputFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelInputFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
