import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchPipe } from './pipes/search.pipe';
import { SearchTestComponent } from './components/group2/search-test/search-test.component';

import { ProductListPageComponent } from './components/group2/product-list-page/product-list-page.component';


@NgModule({
  declarations: [
    AppComponent,

    SearchPipe,
    SearchTestComponent,

    ProductListPageComponent

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
