import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'sc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private authService: AuthService, private dataService : DataService) {}

  @Input() dashboardActive: boolean = false;
  @Input() portfolioActive: boolean = false;
  @Input() tradeActive: boolean = false;
  @Input() historyActive: boolean = false;

  @Input() username: String = this.dataService.userName;

  public ngOnInit(): void {
    // this.dataService.userName = localStorage.getItem()
  }

  logout() {
    this.authService.logout();
  }
}
