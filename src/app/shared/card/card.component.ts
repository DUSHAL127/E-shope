import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/interface/product';
import { addToCart, onClickToCard } from 'src/app/store/productes.action';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
 

  
  @Input() product: Product = {
   
    title:'',
    description:'',
    image:'', 
    price:''
  }
  constructor(private store: Store, private router: Router) {
  
  }
  counterValues: number[] = [];

  addToCart(product: any) {

    const isLoggedIn = localStorage.getItem('flagvalue')
    if(!isLoggedIn){
      
        this.router.navigate(['/login']);
  
    }
    else{

  

    this.store.dispatch(addToCart({ item: product }));
  }
  }
  // onClickToCard() {
  //   this.router.navigate(['/product']);
  //   this.store.dispatch(onClickToCard({ item: this.product }));


  // }


  

  


}
