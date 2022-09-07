import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyTradeComponent } from './pages/buy-trade/buy-trade.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  // { path: 'portfolio', component: PortfolioComponent },
  { path: 'buy', component: BuyTradeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
