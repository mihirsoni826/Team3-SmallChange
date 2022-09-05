// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-username-form-control',
  templateUrl: './username-form-control.component.html',
  styleUrls: ['./username-form-control.component.scss'],
})
export class UsernameFormControlComponent implements OnInit {
  
  public ngOnInit(): void {
    
    var ele = document.querySelector('sc-text-box-standard');
    var errorMsg = document.querySelector('#username-error');

    ele?.addEventListener('focusout', function (event) {

      let inputTxt = event.target.value;  
      let regex =  /^[a-z0-9-_]{3,18}$/i;
      
      if(inputTxt.match(regex) === null) {
        errorMsg?.classList.remove('username-hide-show');
        event.path[0].style.border = "1px solid red";
      } 
      else {
        errorMsg?.classList.add('username-hide-show');
        event.path[0].style.border = "1px solid black";
      }

    });
  }
}
