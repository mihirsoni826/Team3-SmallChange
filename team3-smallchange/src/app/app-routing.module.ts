import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TradeHistoryComponent } from './pages/trade-history/trade-history.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'portfolio', component: PortfolioComponent },
  {path: 'trade-history', component: TradeHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
