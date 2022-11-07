import { Options } from '@angular-slider/ngx-slider';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  currentRating = 0;

  value: number = 3;
  options: Options = {
    floor: 0,
    ceil: 5
  };
  constructor(private formBuilder: FormBuilder, private http:HttpClient) { }

  ngOnInit() {
   
  }


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
        "riskAppetite": this.value
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


