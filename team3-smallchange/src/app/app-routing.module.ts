import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TradeHistoryPageComponent } from './pages/trade-history-page/trade-history-page.component';
import { BuyTradeComponent } from './pages/buy-trade/buy-trade.component';
import { SellTradePageComponent } from './pages/sell-trade-page/sell-trade-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service'
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EquityComponent } from './molecules/equity/equity.component';
import { MutualFundsComponent } from './molecules/mutual-funds/mutual-funds.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'portfolio', component: PortfolioComponent , canActivate: [AuthGuard], children: [
    { path: 'Equity', component: EquityComponent },
    { path: 'Mutual-funds', component: MutualFundsComponent }
  ] },
  { path: 'trade-history', component: TradeHistoryPageComponent,canActivate: [AuthGuard] },
  { path: 'buy', component: BuyTradeComponent ,canActivate: [AuthGuard] },
  { path: 'sell', component: SellTradePageComponent,canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
