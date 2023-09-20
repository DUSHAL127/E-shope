import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { count } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { removeFromCart } from 'src/app/store/productes.action';
import { selectCartItems } from 'src/app/store/productes.selector';
import { productStateInterface } from 'src/app/store/productStateInterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  storeSubscriber$: any = []
  cartItems: productStateInterface[] = [];
  allprice: any[] = [];
  totalprice: number = 0;
  gstRate: number = 18;
  grossAmount: number = 0;
  productID: any = 0;
  count: number = 0;

  constructor(private store: Store, private product: ProductService) {

  }


  ngOnInit() {
    this.storeSubscriber$ = this.store.subscribe((items: any) => {

      this.cartItems = (items.reducer as productStateInterface[]) || [];
      console.log("cartItems: ", this.cartItems)
      this.allprice = this.cartItems.map(item => item.price)
      // console.log(this.allprice)
      this.totalprice = this.allprice.reduce((sum, current) => sum + current, 0);
      // console.log(this.totalprice)
      this.count = this.cartItems.length;
      this.product.counter = this.count;

      console.log('count1', this.count)
      // Gross amount = Net amount × (100% + GST Rate(%))
       this.grossAmount = Math.round( this.totalprice * (1 + this.gstRate / 100))
      console.log(this.grossAmount);

    });

  }
  YouerOderPlaced() {
    alert("Your order is placed")
    alert("Thanks for buying")
  }

  removeItem(productID: number) {
    console.log("productID :", productID)
    this.allprice = this.cartItems.map(item => item.price)
    // console.log(this.allprice)
    this.totalprice = this.allprice.reduce((sum, current) => sum + current, 0);
    // console.log(this.totalprice)
    // Gross amount = Net amount × (100% + GST Rate(%))
   
    this.grossAmount = Math.round( this.totalprice * (1 + this.gstRate / 100))
    // console.log(this.grossAmount);
    this.count = this.cartItems.length;
    this.product.counter = this.count;
    this.cartItems = this.cartItems.filter(item => item.id !== productID);
    this.store.dispatch(removeFromCart({itemId: productID }));

    
  }
}
