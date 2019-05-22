import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material.module';
import { ProductsComponent } from './containers/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductStoreModule } from './store/product-store.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppMaterialModule,
    ProductStoreModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
