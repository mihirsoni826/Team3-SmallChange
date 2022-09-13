import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should display empty page message when no account is selected',() => {
    fixture.componentInstance.msg = 'select account to show';
    fixture.detectChanges();

    let message = fixture.debugElement.query(By.css('p'));
    expect(message.nativeElement.textContent).toContain(component.msg);
  })

  it('should display Report Empty message when account other than brokerage is selected',() => {
    fixture.componentInstance.msg = 'Report is empty';
    fixture.detectChanges();

    let message = fixture.debugElement.query(By.css('p'));
    expect(message.nativeElement.textContent).toContain(component.msg);
  })
});
