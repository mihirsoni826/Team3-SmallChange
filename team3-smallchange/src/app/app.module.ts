import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './organisms/login-form/login-form.component';
import { NavBarLinkComponent } from './atoms/nav-bar-link/nav-bar-link.component';
import { NavBarComponent } from './molecules/nav-bar/nav-bar.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { HeaderTextComponent } from './atoms/header-text/header-text.component';
import { ParagraphTextComponent } from './atoms/paragraph-text/paragraph-text.component';
import { FormLabelComponent } from './atoms/form-label/form-label.component';
import { TextBoxStandardComponent } from './atoms/text-box-standard/text-box-standard.component';
import { TextBoxPasswordComponent } from './atoms/text-box-password/text-box-password.component';
import { ButtonComponent } from './atoms/button/button.component';
import { LinkComponent } from './atoms/link/link.component';
import { HeaderBarComponent } from './molecules/header-bar/header-bar.component';
import { PageTitleComponent } from './molecules/page-title/page-title.component';
import { FooterBarComponent } from './molecules/footer-bar/footer-bar.component';
import { UsernameFormControlComponent } from './molecules/username-form-control/username-form-control.component';
import { PasswordFormControlComponent } from './molecules/password-form-control/password-form-control.component';
import { RouterOutlet } from '@angular/router';
import { DropDownComponent } from './atoms/drop-down/drop-down.component';
import { TableHeaderComponent } from './atoms/table-header/table-header.component';
import { TableBodyComponent } from './atoms/table-body/table-body.component';
import { TotalValueComponent } from './atoms/total-value/total-value.component';
import { UserNameComponent } from './atoms/user-name/user-name.component';
import { PortfolioTableComponent } from './organisms/portfolio-table/portfolio-table.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AcctTypeFilterComponent } from './molecules/acct-type-filter/acct-type-filter.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountSummaryComponent } from './molecules/account-summary/account-summary.component';
import { BrokerageTableComponent } from './molecules/brokerage-table/brokerage-table.component';
import { BrokerageSummaryComponent } from './molecules/brokerage-summary/brokerage-summary.component';
import { PortfolioHeaderComponent } from './molecules/portfolio-header/portfolio-header.component';
import { BuyTradeComponent } from './pages/buy-trade/buy-trade.component';
import { RedAlertComponent } from './atoms/red-alert/red-alert.component';
import { LabelInputFormControlComponent } from './molecules/label-input-form-control/label-input-form-control.component';
import { TradeHistoryComponent } from './pages/trade-history/trade-history.component';
import { SellTradePageComponent } from './pages/sell-trade-page/sell-trade-page.component';

import { SellTradeFormComponent } from './organisms/sell-trade-form/sell-trade-form.component';
import { ModelComponent } from './molecules/model/model.component';
import { LabelDropdownFormControlComponent } from './molecules/label-dropdown-form-control/label-dropdown-form-control.component';

@NgModule({
  imports: [
    BrowserModule, 
    RouterOutlet,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LogoComponent,
    NavBarLinkComponent,
    HeaderTextComponent,
    ParagraphTextComponent,
    FormLabelComponent,
    TextBoxStandardComponent,
    TextBoxPasswordComponent,
    ButtonComponent,
    LinkComponent,

    HeaderBarComponent,
    NavBarComponent,
    PageTitleComponent,
    FooterBarComponent,
    UsernameFormControlComponent,
    PasswordFormControlComponent,

    LoginFormComponent,
    LoginPageComponent,
    DropDownComponent,

    LoginPageComponent,
    SellTradePageComponent,
    SellTradeFormComponent,
    ModelComponent,

    TableHeaderComponent,
    TableBodyComponent,
    TotalValueComponent,
    UserNameComponent,
    PortfolioTableComponent,
    PortfolioComponent,
    AcctTypeFilterComponent,
    AccountSummaryComponent,
    BrokerageTableComponent,
    BrokerageSummaryComponent,
    PortfolioHeaderComponent,
    TradeHistoryComponent,
    BuyTradeComponent,
    RedAlertComponent,
	  LabelInputFormControlComponent,
    LabelDropdownFormControlComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
