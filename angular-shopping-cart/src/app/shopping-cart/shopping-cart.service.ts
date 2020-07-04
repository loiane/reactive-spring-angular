import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartCount$ = new Subject<number>();

  constructor() { }

  getCartCount(): Observable<number> {
    return this.cartCount$.asObservable();
  }
}
