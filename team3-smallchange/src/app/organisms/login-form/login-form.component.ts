// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})

export class LoginFormComponent implements OnInit {

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
  }
}