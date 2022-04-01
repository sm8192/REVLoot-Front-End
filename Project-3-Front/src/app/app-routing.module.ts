import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageComponent } from './components/group2/product-list-page/product-list-page.component';
import { ProductItemComponent } from './components/group2/product-item/product-item.component';

  
const routes: Routes = [
  {path: 'productList', component: ProductListPageComponent},
  { path: 'productItem/:id', component: ProductItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductListPageComponent]
