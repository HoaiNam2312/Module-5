import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductListComponent } from './component/products/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductCreateComponent } from './component/products/product-create/product-create.component';
import { ProductEditComponent } from './component/products/product-edit/product-edit.component';
import { NhaBanDanhsachComponent } from './component/cacNhaCanBan/nha-ban-danhsach/nha-ban-danhsach.component';
import { NhaBanThemMoiComponent } from './component/cacNhaCanBan/nha-ban-them-moi/nha-ban-them-moi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    NhaBanDanhsachComponent,
    NhaBanThemMoiComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
