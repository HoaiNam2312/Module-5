import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './template/home/home.component';
import {Home2Component} from './template/home2/home2.component';
// import {HeaderComponent} from './template/header/header.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home2', component: Home2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
