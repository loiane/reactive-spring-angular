import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';

import { StoreService } from './../../store/app-store.service';
import { AppState } from './../../store/app.reducer';
import * as product from './product.actions';
import * as cart from './../../shopping-cart/store/shopping-cart.actions';
import * as state from './product.state';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService extends StoreService {
  private productsState = createFeatureSelector<state.ProductState>('product');

  private selectors = state.productAdapter.getSelectors(this.productsState);

  private selectCurrentProductId = createSelector(this.productsState, state.selectedProductId);
  private isLoading = createSelector(this.productsState, state.selectIsLoading);
  private error = createSelector(this.productsState, state.selectError);
  private searchQuery = createSelector(this.productsState, state.selectSearchQuery);

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchLoadAction() {
    this.dispatchAction(new product.LoadAction());
  }

  dispatchCreateAction(record: any) {
    this.dispatchAction(new product.CreateAction(record));
  }

  dispatchUpdateAction(record: any) {
    this.dispatchAction(new product.UpdateAction(record));
  }

  dispatchRemoveAction(id) {
    this.dispatchAction(new product.RemoveAction(id));
  }

  getProducts() {
    return combineLatest(
      this.getRecords(),
      this.getSearchQuery(),
      (products, search: any) =>
        search != null && search !== ''
          ? products.filter(v => v.name.toLowerCase().indexOf(search) > -1)
          : products
    );
  }

  getRecords() {
    return this.store.select(this.selectors.selectAll);
  }

  getSearchQuery() {
    return this.store.select(this.searchQuery); // .pipe(tap(console.log));
  }

  getIsLoading() {
    return this.store.select(this.isLoading);
  }

  getError() {
    return this.store.select(this.error);
  }

  findById(record: { id }) {
    return this.getProducts()[record['id']];
  }

  getCurrentProductSelected() {
    return combineLatest(
      this.getProducts(),
      this.store.select(this.selectCurrentProductId),
      (products, selectedId) => selectedId.map(id => products[id])
    );
  }

  dispatchAddToCart(record: any) {
    this.dispatchAction(new cart.AddToCartAction());
  }
}
