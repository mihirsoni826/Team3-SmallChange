import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TradeHistoryComponent } from './pages/trade-history/trade-history.component';
import { BuyTradeComponent } from './pages/buy-trade/buy-trade.component';
import { SellTradePageComponent } from './pages/sell-trade-page/sell-trade-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'portfolio', component: PortfolioComponent },
  {path: 'trade-history', component: TradeHistoryComponent},
  { path: 'buy', component: BuyTradeComponent },
  { path: 'sell', component: SellTradePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
