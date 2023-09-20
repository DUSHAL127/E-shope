import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productStateInterface } from './productStateInterface';
import { state } from '@angular/animations';


interface AppState {
  cart: productStateInterface[]; 
}


const selectCartFeature = createFeatureSelector<AppState>('cartFeature'); 


export const selectCartItems = createSelector(
  selectCartFeature,
  (state) => state.cart,
);
