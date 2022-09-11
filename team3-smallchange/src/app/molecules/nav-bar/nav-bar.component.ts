

// Allows JavaScript to be compiled - otherwise use of TypeScript is enforced.
// @ts-nocheck
import { Component, Input, OnInit } from '@angular/core';
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

  @Input() dashboardActive: boolean = false;
  @Input() portfolioActive: boolean = false;
  @Input() tradeActive: boolean = false;
  @Input() historyActive: boolean = false;

  @Input() username: string = "John Doe";


  logout()
  {
    this.authService.logout();
  }

}
