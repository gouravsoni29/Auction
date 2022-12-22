import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductviewComponent } from './productview/productview.component';
import { SellerristerComponent } from './seller_reg/sellerrister.component';
import { AddProductComponent } from './add-product/add-product.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authInterceptorProviders } from './auth.interceptor';
import { AdminComponent } from './admin/admin.component';
import { CutomdashComponent } from './cutomdash/cutomdash.component';
import { AboutComponent } from './about/about.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { CutomerListComponent } from './cutomer-list/cutomer-list.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { InsertSellerComponent } from './insert-seller/insert-seller.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { InsertCustomerComponent } from './insert-customer/insert-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductviewComponent,
    SellerristerComponent,
    AddProductComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    CutomdashComponent,
    AboutComponent,
    SellerListComponent,
    CutomerListComponent,
    ViewproductComponent,
    UpdateProductComponent,
    InsertSellerComponent,
    SellerDetailsComponent,
    InsertCustomerComponent,
    UpdateCustomerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
