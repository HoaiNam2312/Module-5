import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './component/products/product-list/product-list.component';
import {ProductCreateComponent} from './component/products/product-create/product-create.component';
import {ProductEditComponent} from './component/products/product-edit/product-edit.component';
import {NhaBanDanhsachComponent} from './component/cacNhaCanBan/nha-ban-danhsach/nha-ban-danhsach.component';
import {NhaBanThemMoiComponent} from './component/cacNhaCanBan/nha-ban-them-moi/nha-ban-them-moi.component';


const routes: Routes = [
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  {path: 'nhaBan/list', component: NhaBanDanhsachComponent},
  {path: 'nhaBan/create', component: NhaBanThemMoiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
