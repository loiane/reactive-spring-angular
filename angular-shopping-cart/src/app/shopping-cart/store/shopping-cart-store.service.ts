import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducer';
import { SearchProductAction } from './shopping-cart.actions';
import * as state from './shopping-cart.state';
import { StoreService } from '../../store/app-store.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartStoreService extends StoreService {

  private cartState = createFeatureSelector<state.ShoppingCartState>('shopping-cart');
  private cartCount = createSelector(this.cartState, state.selectedCartCount);

  constructor(protected store: Store<AppState>) {
    super();
   }

  getCartCount() {
    return this.store.select(this.cartCount);
  }

  dispatchSearch(searchQuery: string) {
   this.dispatchAction(new SearchProductAction(searchQuery));
  }

  dispatchLoadAction() {}
  dispatchCreateAction(record: any)  {}
  dispatchUpdateAction(record: any)  {}
  dispatchRemoveAction({ id: any })  {}
}
