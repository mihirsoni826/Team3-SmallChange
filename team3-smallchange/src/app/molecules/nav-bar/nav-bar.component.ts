
// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'sc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authService:AuthService){}

  public ngOnInit(): void {
    document.getElementById('activity').children[0].innerHTML = 'Activity';
    document.getElementById('trade').children[0].innerHTML = 'Trade';
    document.getElementById('preferences').children[0].innerHTML = 'Preferences';

    const hamburgerIcon = document.getElementById('hamburger-icon');
 
    hamburgerIcon.addEventListener('click', () => {
      document.getElementsByClassName("navbar")[0].classList.toggle("toggle-navbar");
    });
    
  }

  logout()
  {
    this.authService.logout();
  }

}
