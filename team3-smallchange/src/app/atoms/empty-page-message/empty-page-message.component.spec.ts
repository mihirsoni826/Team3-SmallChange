import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPageMessageComponent } from './empty-page-message.component';

describe('EmptyPageMessageComponent', () => {
  let component: EmptyPageMessageComponent;
  let fixture: ComponentFixture<EmptyPageMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyPageMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyPageMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
