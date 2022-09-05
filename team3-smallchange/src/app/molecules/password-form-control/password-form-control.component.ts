
// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-password-form-control',
  templateUrl: './password-form-control.component.html',
  styleUrls: ['./password-form-control.component.scss'],
})
export class PasswordFormControlComponent implements OnInit {

  public ngOnInit(): void {
    
    var ele = document.querySelector('sc-text-box-password');
    var errorMsg = document.querySelector('#pass-error');

    ele?.addEventListener('focusout', function (event) {

      let inputTxt = event.target.value;  
      let regex =  /^[a-z0-9-_]{6,24}$/i;
      
      if(inputTxt.match(regex) === null) {
        errorMsg?.classList.remove('pass-hide-show');
        event.path[0].style.border = "1px solid red";
      } 
      else {
        errorMsg?.classList.add('pass-hide-show');
        event.path[0].style.border = "1px solid black";
      }

    });

  }

}
