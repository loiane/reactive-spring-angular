import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';

import { ShoppingCartStoreService } from '../../store/shopping-cart-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {

  searchQuery = '';
  cartCount$: Observable<number>;
  destroySub = new Subject();

  constructor(private service: ShoppingCartStoreService) { }

  ngOnInit() {
    this.cartCount$ = this.service.getCartCount();
  }

  watchSearch() {
    of(this.searchQuery)
      .pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        filter(query => query.length > 2 || query === ''),
        takeUntil(this.destroySub)
      )
      .subscribe(query => this.service.dispatchSearch(query));
  }

  ngOnDestroy() {
    this.destroySub.next(true);
    this.destroySub.complete();
  }

  checkoutCart() {

  }

}
