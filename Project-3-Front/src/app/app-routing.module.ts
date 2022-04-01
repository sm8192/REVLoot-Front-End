import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageComponent } from './components/group2/product-list-page/product-list-page.component';
import { ProductItemComponent } from './components/group2/product-item/product-item.component';
import { OrdercompleteComponent } from './components/group3/ordercomplete/ordercomplete.component';
import { CheckoutformComponent } from './components/group3/checkoutform/checkoutform.component';
import { CartComponent } from './components/group3/cart/cart.component';
import { HomeComponent } from './components/group3/home/home.component';

  
const routes: Routes = [
  {path: 'productList', component: ProductListPageComponent},
  { path: 'productItem/:id', component: ProductItemComponent},
  {path: 'checkout', component: CheckoutformComponent},
  {path: 'cart', component: CartComponent},
  {path: 'home', component: HomeComponent},
  {path: '',   redirectTo: '/productList', pathMatch: 'full'},
  {path: 'ordercomplete', component: OrdercompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductListPageComponent]
