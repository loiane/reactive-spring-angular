import { ProductAction, ProductActions } from './product.actions';
import { productAdapter, productInitialState, ProductState } from './product.state';

export function productReducer(
  state = productInitialState,
  action: ProductAction
): ProductState {

  switch (action.type) {
    case ProductActions.LOAD: {
      return Object.assign({}, state, {
        isLoading: true,
        isLoaded: false,
        hasError: false,
        error: null
      });
    }

    case ProductActions.LOAD_SUCCESS: {
      return {
        ...productAdapter.addMany(action.payload, state),
        isLoading: false,
        error: null
      };
    }

    case ProductActions.CREATE_SUCCESS: {
      return {
        ...productAdapter.addOne(action.payload, state),
        error: null
      };
    }

    case ProductActions.UPDATE_SUCCESS: {
      return {
        ...productAdapter.updateOne({id: action.payload.id, changes: action.payload}, state),
        error: null
      };
    }

    case ProductActions.REMOVE_SUCCESS: {
      return {
        ...productAdapter.removeOne(action.payload.id, state),
        error: null,
      };
    }

    case ProductActions.ERROR: {
      return Object.assign({}, state, {
        error: action.payload.message
      });
    }

    case ProductActions.SEARCH_PRODUCT : {
      return Object.assign({}, state, {
        searchQuery: action.payload
      });
    }

    default: {
      return state;
    }
  }
}
