import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// import { HeaderComponent } from './header/header.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {APP_BASE_HREF} from '@angular/common';
import {HomeComponent} from './layout/home/home.component';
import {Home2Component} from './layout/home2/home2.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
// import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
// import {NgxPaginationModule} from 'ngx-pagination';
// import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Home2Component,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2OrderModule,
    // NgbPaginationModule,
    // NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
