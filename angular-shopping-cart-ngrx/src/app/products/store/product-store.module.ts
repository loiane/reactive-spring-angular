import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductEffects } from './product.effects';
import { productReducer } from './product.reducer';

// import ProductStoreModule in the ProductModule
@NgModule({
  imports: [
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  exports: [StoreModule, EffectsModule]
})
export class ProductStoreModule {}
