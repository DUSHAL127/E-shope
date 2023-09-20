import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : '' , component : HomepageComponent, pathMatch: "full"},
  {path : 'home' , component : HomepageComponent},
  {path : 'cart', component : CartComponent, canActivate: [AuthGuard],},
  {path : 'login', component : LoginComponent},
  {path : 'product', component : ProductDetailComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'forgetpassword', component : ForgetpasswordComponent},
  {path : '**', component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
