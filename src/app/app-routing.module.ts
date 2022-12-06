import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ProductviewComponent } from './productview/productview.component';
import { SellerristerComponent } from './seller_reg/sellerrister.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'productview',component:ProductviewComponent,pathMatch:'full'},
  {
    path:'sellerreg',component:SellerristerComponent,pathMatch:'full'
  },
  {path:'add-new',component:AddProductComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
