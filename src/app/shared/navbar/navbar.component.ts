import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { count } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { productStateInterface } from 'src/app/store/productStateInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(private router: Router, private store: Store, private product: ProductService) {}
  
  storeSubscriber$ : any = []
  cartItems: productStateInterface[] = [];
  count : number =0;
  loginState = localStorage.getItem("flagvalue");
  statelogin:boolean=false;
  

  ngOnInit() {
    
    this.statelogin=Boolean(this.loginState);
    console.log(this.statelogin, typeof(this.statelogin))
    this.storeSubscriber$ = this.store.subscribe((items:any) => {
      
      this.cartItems = (items.reducer as productStateInterface[]) || [];
      this.count  = this.product.counter

    });

  }


 
  redirectToHome() {
    this.router.navigate(['/home'])
  }
  
  redirectToCart() {
    this.router.navigate(['/cart']);
  }
  
   redirectToLogin() {
    this.router.navigate(['/login']);
  }
  
   redirectToProduct() {
    this.router.navigate(['/product'])
  }

   Logout() {
    localStorage.removeItem('flagvalue');
    localStorage.setItem('flagvalue',JSON.stringify(false));
    this.router.navigate(['/login']);
  }


}
