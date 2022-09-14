import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'sc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  @Input() dashboardActive: boolean = false;
  @Input() portfolioActive: boolean = false;
  @Input() tradeActive: boolean = false;
  @Input() historyActive: boolean = false;

  @Input() username: string = 'John Doe';

  public ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
