import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './http.interceptor';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgwWowModule } from 'ngx-wow';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ViewtileComponent } from './viewtile/viewtile.component';
import { NavbarModule } from './navbar/navbar.module';
import { ServiceModule } from './service/service.module';
import { HttpService } from './http.service';
import { LoadingComponent } from './loading/loading.component';
import { StartUpComponent } from './start-up/start-up.component';
import { WeComponent } from './we/we.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgwWowModule,
    NavbarModule,
    ServiceModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    ViewtileComponent,
    LoadingComponent,
    StartUpComponent,
    WeComponent,
    AboutUsComponent,
    PortfolioComponent,
    ContactComponent,
    AuthComponent
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
