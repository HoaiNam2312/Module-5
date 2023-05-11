import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {Home2Component} from './layout/home2/home2.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
// import {HeaderComponent} from './layout/header/header.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'customer/list', component: CustomerListComponent
  },
  {
    path: 'customer/create', component: CustomerCreateComponent
  },
  {
    path: 'customer/edit/:id', component: CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
