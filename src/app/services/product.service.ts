import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = "https://fakestoreapi.com/products";// api
  public counter = 0
  constructor() {
    console.log(this.counter)
  }
  // get operatoin 
  getProducts(): Observable<any> {
    return new Observable(observer => {
      axios.get(this.apiURL)// api call and  handle
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
          console.log('error')
        });

    });
  }
}
