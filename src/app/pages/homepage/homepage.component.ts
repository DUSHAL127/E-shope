import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  products: any[] = [];
  constructor(private productServices: ProductService) {}//dependence inject
 
  ngOnInit(): void {
   this.productServices.getProducts().subscribe(
     data => {
       this.products = data;
     },
     error => {
       console.error('An error occurred:', error);
     }
   )
  }
}
