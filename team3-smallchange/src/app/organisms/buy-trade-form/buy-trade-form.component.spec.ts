import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ButtonComponent } from 'src/app/atoms/button/button.component';
import { RedAlertComponent } from 'src/app/atoms/red-alert/red-alert.component';
import { ModelComponent } from 'src/app/molecules/model/model.component';

import { BuyTradeFormComponent } from './buy-trade-form.component';

describe('BuyTradeFormComponent', () => {
  let component: BuyTradeFormComponent;
  let fixture: ComponentFixture<BuyTradeFormComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ 
        BuyTradeFormComponent,
        RedAlertComponent,
        ButtonComponent,
        ModelComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTradeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should create the form", () => {
    let form = fixture.nativeElement.querySelector("form");
    expect(form).toBeTruthy();
  });

  it("should display appropriate number of options under asset class dropdown", () => {
    let assetClassSelect = fixture.nativeElement.querySelector("#assetClass");
    expect(assetClassSelect.length).toEqual(component.assetClassList.length + 1);
  });

  it("should display appropriate number of options under bank account dropdown", () => {
    let bankAccountSelect = fixture.nativeElement.querySelector("#bankAccount");
    expect(bankAccountSelect.length).toEqual(component.bankAccountList.length + 1);
  });

  it("should prevent form submission if a field is invalid", () => {
    component.assetClass.markAsTouched;
    fixture.detectChanges();
    let buyBtn = fixture.nativeElement.querySelector("#submit-btn");
    expect(buyBtn.disabled).toBeTruthy();
  });

  it("should have the amount field as readonly", () => {
    let amtField = fixture.nativeElement.querySelector("#disabledTextInput");
    expect(amtField.getAttribute("readonly")).toBe("true");
  });

  it("should allow submission when form is valid", () => {
    let buyBtn = fixture.nativeElement.querySelector("#submit-btn");

    component.buyForm.controls['assetClass'].setErrors(null);
    component.buyForm.controls['security'].setErrors(null);
    component.buyForm.controls['quantity'].setErrors(null);
    component.buyForm.controls['bankAccount'].setErrors(null);
    fixture.detectChanges();
    
    expect(buyBtn.disabled).toBeFalsy();
  });

  it("display modal when 'Buy' button is clicked", () => {
    let buyBtn = fixture.nativeElement.querySelector("#submit-btn");

    buyBtn.click();
    fixture.detectChanges();
    let dis = component.dis;

    expect(dis).toBe("display: flex");
  });
});
