import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private total = 0;
  private cartCount$ = new Subject<number>();

  constructor() { }

  getCartCount(): Observable<number> {
    return this.cartCount$.asObservable();
  }

  addProduct(): void {
    this.total++;
    this.updateCart();
  }

  checkout(): void {
    this.total = 0;
    this.updateCart();
  }

  private updateCart(): void {
    this.cartCount$.next(this.total);
  }
}
