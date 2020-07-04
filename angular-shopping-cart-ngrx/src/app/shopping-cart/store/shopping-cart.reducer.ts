import { CartActions, CartAction } from './shopping-cart.actions';
import { ShoppingCartState, shoppingCartInitialState } from './shopping-cart.state';

export function shoppingCartReducer(
  state = shoppingCartInitialState,
  action: CartAction
): ShoppingCartState {

  switch (action.type) {
    case CartActions.ADD_TO_CART: {
      return Object.assign({}, state, {
        cartCount: state.cartCount + 1
      });
    }

    default: {
      return state;
    }
  }
}
