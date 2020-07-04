import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ShoppingCartService } from '../../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  searchQuery = '';
  cartCount$ = new Observable<number>();
  destroySub = new Subject();

  constructor(private service: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartCount$ = this.service.getCartCount();
  }

  ngOnDestroy(): void {
    this.destroySub.next(true);
    this.destroySub.complete();
  }

}
