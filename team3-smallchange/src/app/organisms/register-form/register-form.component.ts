import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  // constructor() { }
  // @ViewChild('registerForm', { static: true }) registerForm: FormGroup;

  // @ViewChild('firstname', { static: true }) firstname: FormGroup;
  // @ViewChild('password', { static: true }) password: FormControl;

  // ngOnInit(): void {
  

  // let form = document.querySelector('#form-wrapper');
  // form?.addEventListener('submit', function (event) {
    
  //   event.preventDefault();
    
  //   let json = {
  //     username: '',
  //     password: '',
  //     usernameEncoded: '',
  //     passwordEncoded: '',
  //   };
    
  //   json.username = form['username'].value;
  //   json.password = form['password'].value;
  //   json.usernameEncoded = window.btoa(json.username);
  //   json.passwordEncoded = window.btoa(json.password);

  //   console.log(json);
  // });
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
         
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
         
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }



  onSubmitHandler(form:any) {
   
   alert("User created.")
   
  }
}



