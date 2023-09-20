import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/interface/product';
import { productStateInterface } from 'src/app/store/productStateInterface';
import { addToCart } from 'src/app/store/productes.action';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  storeSubscriber$ : any = []
  cartItems: productStateInterface[] = [];

  constructor(private store: Store) {
    
  }
  

  ngOnInit() {
    this.storeSubscriber$ = this.store.subscribe((items:any) => {
      
      this.cartItems = (items.reducer as productStateInterface[]) || [];
      console.log("cartItems: ",this.cartItems)

    });
  }


}
