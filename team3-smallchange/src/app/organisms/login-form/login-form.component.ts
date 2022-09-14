// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck
import { Component, OnInit,ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})

export class LoginFormComponent implements OnInit {


 constructor(private rrouter: Router,private dataService:DataService){}
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
      
      json.username = form.elements['username'].value;
      json.password = form.elements['password'].value;
      json.usernameEncoded = window.btoa(json.username);
      json.passwordEncoded = window.btoa(json.password);

      console.log(json);
    });


    this.dataService.getLoginCred().subscribe((response) => {
      this.users = response;
    })
  }


  banner: string="Incorrect Username or Password!";

  onSubmitHandler(form:any) {
   
   
   
    if(this.users[form.value.userId]==form.value.password  )
    {
        localStorage.setItem('token', "12345qwert");
        this.rrouter.navigateByUrl('dashboard');
    }
    else
     this.wrong=true;
     
  }
}