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
import { RouterOutlet } from '@angular/router';
import { DropDownComponent } from './atoms/drop-down/drop-down.component';
import { TableHeaderComponent } from './atoms/table-header/table-header.component';

/**
 * ******************
 * *** IMPORTANT! ***
 * ******************
 *
 * In Angular-only applications it is correct to use this app.module.ts file to build out the NgModule
 * config so that declared components become aware of each other, and the necessary imports are wired in.
 *
 * However, SmallChange is an Angular application WITH Storybook. The way Storybook works is that every story
 * told in Storybook is its own mini-app with its own NgModule definition.
 *
 * Meaning, if you add declarations and imports here in this file, your stories will not be affected! Instead,
 * you need to go to the appropriate src\stories\**\*.stories.ts file and edit the moduleMetadata config.
 */

@NgModule({
  imports: [BrowserModule, RouterOutlet],
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
    TableHeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
