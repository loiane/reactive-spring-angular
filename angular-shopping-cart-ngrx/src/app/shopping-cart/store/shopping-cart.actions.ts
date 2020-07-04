import { NgRxAction } from '../../store/ngrx-action';

export enum CartActions {
  ADD_TO_CART = '[Cart] ADD_TO_CART Requested',
  SEARCH_PRODUCT = '[Cart] SEARCH Requested'
}

export class AddToCartAction extends NgRxAction<any> { type = CartActions.ADD_TO_CART; }
export class SearchProductAction extends NgRxAction<any> { type = CartActions.SEARCH_PRODUCT; }

export type CartAction =
AddToCartAction | SearchProductAction;


