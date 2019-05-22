import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/containers/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './products/products.module#ProductsModule'
      },
      {
        path: 'checkout',
        loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
