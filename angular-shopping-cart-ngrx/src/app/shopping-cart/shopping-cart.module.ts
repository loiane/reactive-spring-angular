import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material.module';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingCartStoreModule } from './store/shopping-cart.module';
import { CheckoutComponent } from './container/checkout/checkout.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShoppingCartRoutingModule,
    AppMaterialModule,
    ShoppingCartStoreModule
  ],
  declarations: [HeaderComponent, CheckoutComponent],
  exports: [HeaderComponent]
})
export class ShoppingCartModule { }
