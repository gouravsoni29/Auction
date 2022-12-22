import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { CutomdashComponent } from './cutomdash/cutomdash.component';
import { CutomerListComponent } from './cutomer-list/cutomer-list.component';
import { HomeComponent } from './home/home.component';
import { InsertCustomerComponent } from './insert-customer/insert-customer.component';
import { InsertSellerComponent } from './insert-seller/insert-seller.component';
import { LoginComponent } from './login/login.component';
import { NormalGuard } from './normal.guard';
import { ProductviewComponent } from './productview/productview.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerristerComponent } from './seller_reg/sellerrister.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'productlist',component:ProductviewComponent,pathMatch:'full'},
  {
    path:'sellerreg',component:SellerristerComponent,pathMatch:'full'
  },
  {path:'add-new',component:AddProductComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:"about",component:AboutComponent},
  {path:'update-product/:sellerID',component:UpdateProductComponent},
  {path:'seller-reg',component:InsertSellerComponent},
  {path:'sellerlist',component:SellerListComponent},
  {path:'seller-details/:sellerID',component:SellerDetailsComponent},
  {path:'view-product/:sellerID',component:ViewproductComponent},
  {path:'customreg',component:InsertCustomerComponent},
  {path:'customerlist',component:CutomerListComponent},
  {path:'view-customer/:customerID',component:CutomdashComponent},
  {path:'update-customer/:customerID',component:UpdateCustomerComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
