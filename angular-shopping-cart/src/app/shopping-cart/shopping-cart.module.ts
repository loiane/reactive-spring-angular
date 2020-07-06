import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedModule
  ]
})
export class ShoppingCartModule { }
