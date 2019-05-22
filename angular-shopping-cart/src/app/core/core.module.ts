import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AppMaterialModule } from '../shared/app-material.module';
import { MainComponent } from './containers/main/main.component';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AppMaterialModule,
    ShoppingCartModule
  ],
  declarations: [MainComponent]
})
export class CoreModule { }
