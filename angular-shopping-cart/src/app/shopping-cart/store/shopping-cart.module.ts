import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ShoppingCartEffects } from './shopping-cart.effects';
import { shoppingCartReducer } from './shopping-cart.reducer';

// import ShoppingCartStoreModule in the ProductModule
@NgModule({
  imports: [
    StoreModule.forFeature('shopping-cart', shoppingCartReducer),
    EffectsModule.forFeature([ShoppingCartEffects])
  ],
  exports: [StoreModule, EffectsModule]
})
export class ShoppingCartStoreModule {}
