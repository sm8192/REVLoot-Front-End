import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/Login/login/login.component';
import { RegisterComponent } from './components/Login/register/register.component';
import { ProductListPageComponent } from './components/group2/product-list-page/product-list-page.component';
import { ProductItemComponent } from './components/group2/product-item/product-item.component';
import { OrdercompleteComponent } from './components/group3/ordercomplete/ordercomplete.component';
import { CheckoutformComponent } from './components/group3/checkoutform/checkoutform.component';
import { CartComponent } from './components/group3/cart/cart.component';
  
const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'productList', component: ProductListPageComponent},
  {path: 'productItem/:id', component: ProductItemComponent},
  {path: 'checkout', component: CheckoutformComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: '/productList', pathMatch: 'full'},
  {path: 'ordercomplete', component: OrdercompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductListPageComponent]
