import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBarComponent } from './molecules/footer-bar/footer-bar.component';
import { HeaderBarComponent } from './molecules/header-bar/header-bar.component';
import { NavBarComponent } from './molecules/nav-bar/nav-bar.component';
import { PageTitleComponent } from './molecules/page-title/page-title.component';
import { PasswordFormControlComponent } from './molecules/password-form-control/password-form-control.component';
import { UsernameFormControlComponent } from './molecules/username-form-control/username-form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBarComponent,
    HeaderBarComponent,
    NavBarComponent,
    PageTitleComponent,
    PasswordFormControlComponent,
    UsernameFormControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
