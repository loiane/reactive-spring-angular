import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Product } from './../model/product';

export interface ProductState extends EntityState<Product> {
    isLoading: boolean;
    selectedProductId: any;
    error: any;
    displayProducts: any;
    searchQuery: string;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id,
  sortComparer: false,
});

export const productInitialState: ProductState = productAdapter.getInitialState({
  isLoading: true,
  selectedProductId: null,
  error: null,
  displayProducts: [],
  searchQuery: ''
});

export const selectedProductId = (state: ProductState) => state.selectedProductId;
export const selectIsLoading = (state: ProductState) => state.isLoading;
export const selectError = (state: ProductState) => state.error;
export const selectSearchQuery = (state: ProductState) => state.searchQuery;
