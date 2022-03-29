import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Login/login/login.component';
import { RegisterComponent } from './components/Login/register/register.component';

import { RegisterComponent } from './components/Login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
=======
>>>>>>> 1baa5197b776c773c762f34af2892dbe979a8922
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
