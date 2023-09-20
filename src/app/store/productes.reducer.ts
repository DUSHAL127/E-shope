import { createReducer, on } from '@ngrx/store';
import { addToCart, onClickToCard, removeFromCart } from './productes.action';
import { productStateInterface } from './productStateInterface';
import { state } from '@angular/animations';

const initialState: productStateInterface[] = [];

const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { item }) => [...state, item]),
  on(removeFromCart, (state, { itemId }) => state.filter(item => item.id !== itemId)),
  on(onClickToCard,(state,{item})=> [...state,item] )
);

export function reducer(state: any[] | undefined, action: any) {
  return cartReducer(state, action);
}
