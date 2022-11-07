import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
    @ViewChild('registerForm', { static: true }) registerForm: FormGroup;
    @ViewChild('firstName', { static: true }) firstName: FormControl;
    @ViewChild('lastName', { static: true }) lastName: FormControl;
    @ViewChild('email', { static: true }) email: FormControl;
    @ViewChild('phoneNumber', { static: true }) phoneNumber: FormControl;
    @ViewChild('password', {static: true}) password: FormControl;
    @ViewChild('dob', {static: true}) dob:FormControl
 
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http:HttpClient) { }

  ngOnInit() {
    //   this.registerForm = this.formBuilder.group({
         
    //       firstName: ['', Validators.required],
    //       lastName: ['', Validators.required],
    //       email: ['', [Validators.required, Validators.email]],
    //       password: ['', [Validators.required, Validators.minLength(6)]],
    //       phoneNumber:['', Validators.required],
    //       confirmPassword: ['', Validators.required],
         
    //   }, {
    //       validator: MustMatch('password', 'confirmPassword')
    //   });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  show: boolean = false;

 
  
  // click event function toggle
  showPassword() {
    console.log(this.show)
      this.show = !this.show;
  }

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
    console.log(form)
    console.log(form.firstName)
//     console.log(form.get('firstName').value)
//    console.log(this.registerForm.controls)
   this.registerUser(form);
   
  }

  async registerUser(form:any){
   
   
    var  apiURL = 'http://localhost:8080/signup';
    const body = JSON.stringify({
        "email": form.email,
        "password": form.password,
        "firstName": form.firstName,
        "lastName":form.lastName,
        "dob": form.dob,
        "phone": form.phoneNumber,
        "riskAppetite": 2
    })
    console.log(body) 
 
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
       }),
     };
     var theDataSource = this.http
     .post(
       apiURL,
       body,
       httpOptions
     )
   
     var data = theDataSource.subscribe(async (response: any) => {
       console.log(response)
     }
     )
   
}
}


