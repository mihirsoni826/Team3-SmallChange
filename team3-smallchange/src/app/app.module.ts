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
import { FilterGenericComponent } from './molecules/filter-generic/filter-generic.component';
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
import { AssetClassFormControlComponent } from './molecules/asset-class-form-control/asset-class-form-control.component';
import { BuySecurityFormControlComponent } from './molecules/buy-security-form-control/buy-security-form-control.component';
import { AppRoutingModule } from './app-routing.module';

import { SellTradePageComponent } from './pages/sell-trade-page/sell-trade-page.component';

import { SellTradeFormComponent } from './organisms/sell-trade-form/sell-trade-form.component';
import { ModelComponent } from './molecules/model/model.component';

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
    FilterGenericComponent,
    TotalValueComponent,
    UserNameComponent,
    PortfolioTableComponent,
    PortfolioComponent,
    AcctTypeFilterComponent,
    AccountSummaryComponent,
    BrokerageTableComponent,
    BrokerageSummaryComponent,
    PortfolioHeaderComponent

    BuyTradeComponent,
    RedAlertComponent,
    AssetClassFormControlComponent,
    BuySecurityFormControlComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
