import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { ButtonComponent } from 'src/app/atoms/button/button.component';



import { SellTradeFormComponent } from './sell-trade-form.component';

describe('SellTradeFormComponent', () => {
  let component: SellTradeFormComponent;
  let fixture: ComponentFixture<SellTradeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
                FormsModule
              ],
      declarations: [ SellTradeFormComponent,
        ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellTradeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  // it("should have the amount field as readonly", () => {
  //   let amtField = fixture.nativeElement.querySelector("#disabledTextInput");
  //   expect(amtField.getAttribute("readonly")).toBe("true");
  // });

  it("should allow submission when form is valid", () => {
    component.assetClass.valid;
    component.security.valid;
    component.quantity.valid;
    component.bankAccount.valid;
    component.buyForm.valid;
    fixture.detectChanges();
    let buyBtn = fixture.nativeElement.querySelector("#submit-btn");
    expect(buyBtn.disabled).toBeTrue();
  });
});
