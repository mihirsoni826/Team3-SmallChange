import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import{ BrowserModule, By}from '@angular/platform-browser'
import { LoginFormComponent } from './login-form.component';
import { FormsModule } from '@angular/forms';
// import { UserService } from 'src/app/shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService }  from '../../services/auth.service';


describe('SignInComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule,ReactiveFormsModule],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create te form', () => {
    expect(component).toBeTruthy();
  });


  it('Form submit click', () =>{ () =>{
    const submitButton = fixture.debugElement.query(By.css('#submit'));
    const username = fixture.debugElement.query(By.css('#userId'));
    username.nativeElement.value = 'asdf';
    username.nativeElement.dispatchEvent(new Event('input'));

    submitButton.triggerEventHandler('click', null);

    const displayText = fixture.debugElement.query(
      By.css('h1')
    );
    // manual detection 
    fixture.detectChanges();
    expect(displayText.nativeElement.textContent).toBe('asdf');
  }

  });

  it('Should call the OnSubmitHandler method', () =>{ fakeAsync(() =>{
    fixture.detectChanges();
    spyOn(component,'onSubmitHandler');
    el=fixture.debugElement.query(By.css('#submit')).nativeElement;
    el.click();
    expect(component.onSubmitHandler).toHaveBeenCalledTimes(0);
  })

  });

  it("should allow when Login when form is valid", () => {
        component.loginForm.valid;
        fixture.detectChanges();
        let buyBtn = fixture.nativeElement.querySelector("#submit");
        expect(buyBtn.disabled).toBeFalsy();
      });

});