// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck
import { Component, OnInit,ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'sc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})

export class LoginFormComponent implements OnInit {


 constructor(private rrouter: Router,private dataService:DataService, private http: HttpClient){}
 @ViewChild('loginForm', { static: true }) loginForm: FormGroup;
  @ViewChild('userId', { static: true }) userId: FormGroup;
  @ViewChild('password', { static: true }) passowrd: FormControl;

  users : object;
  wrong :boolean = false;

  btnName = 'Login';
  btnType = 'submit';
  public ngOnInit(): void {
    
    let form = document.querySelector('#form-wrapper');
    form?.addEventListener('submit', function (event) {
      
      event.preventDefault();
      
      let json = {
        username: '',
        password: '',
        usernameEncoded: '',
        passwordEncoded: '',
      };
      
      // json.username = form.elements['username'].value;
      // json.password = form.elements['password'].value;
      // json.usernameEncoded = window.btoa(json.username);
      // json.passwordEncoded = window.btoa(json.password);

    //   console.log(json);
    });
  
  }

  onSubmitHandler(form:any){
    console.log(form)
    this.validateUser(form)
  }

  banner: string="Incorrect Username or Password!";

  async validateUser(form:any) {
    var apiURL = "http://localhost:8080/signin"
    const body = JSON.stringify({
      "email" : form.userId,
      "password" : form.password 
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
  
    var data = theDataSource.subscribe(
      async (response: any) => {
      console.log(response)
      console.log(form.userId)
      if(response.email === form.userId){
         this.dataService.userEmail = response.email
         this.dataService.userName = response.firstName
         console.log(this.dataService.userName)
          console.log("yes")
          localStorage.setItem("userEmail", this.dataService.userEmail);
          this.rrouter.navigateByUrl('dashboard');
      }
    }

    )

   
  //   if(this.users[form.value.userId]==form.value.password  )
  //   {
  //       localStorage.setItem('token', "12345qwert");
  //       this.rrouter.navigateByUrl('dashboard');
  //   }
  //   else
  //    this.wrong=true;
     
  }
}