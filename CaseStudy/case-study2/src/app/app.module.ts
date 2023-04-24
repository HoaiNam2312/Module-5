import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
import {HeaderComponent} from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import {APP_BASE_HREF} from '@angular/common';
import { HomeComponent } from './template/home/home.component';
import { Home2Component } from './template/home2/home2.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        Home2Component
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
