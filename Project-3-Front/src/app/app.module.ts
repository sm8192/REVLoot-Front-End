import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './pipes/search.pipe';
import { ProductListPageComponent } from './components/group2/product-list-page/product-list-page.component';
import { ProductItemComponent } from './components/group2/product-item/product-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/group3/cart/cart.component';
import { CheckoutformComponent } from './components/group3/checkoutform/checkoutform.component';
import { CartdropdownComponent } from './components/group3/cartdropdown/cartdropdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrdercompleteComponent } from './components/group3/ordercomplete/ordercomplete.component';
import { LoginComponent } from './components/Login/login/login.component';
import { RegisterComponent } from './components/Login/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    SearchPipe,
    ProductListPageComponent,
    ProductItemComponent,
    NavbarComponent,
    AppComponent,
    CheckoutformComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    CartdropdownComponent,
    OrdercompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
