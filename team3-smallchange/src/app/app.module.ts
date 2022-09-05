import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,
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

    
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
