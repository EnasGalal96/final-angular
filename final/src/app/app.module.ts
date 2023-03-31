import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CatigoryOfProductsComponent } from './components/catigory-of-products/catigory-of-products.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SignUpComponent,
    LogInComponent,
    ContactUsComponent,
    AboutUsComponent,
    CatigoryOfProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
