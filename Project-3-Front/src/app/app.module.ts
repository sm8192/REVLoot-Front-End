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
import { HomeComponent } from './components/group3/home/home.component';
import { OrdercompleteComponent } from './components/group3/ordercomplete/ordercomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    ProductListPageComponent,
    ProductItemComponent,
    NavbarComponent,
    AppComponent,
    CheckoutformComponent,
    CartComponent,
    NavbarComponent,
    HomeComponent,
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
