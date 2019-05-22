import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { ProductStoreService } from '../../store/product-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  isLoading$: Observable<boolean>;
  products$: Observable<Product[]>;
  error$: Observable<string>;

  constructor(private service: ProductStoreService) { }

  ngOnInit() {
    this.service.dispatchLoadAction();
    this.products$ = this.service.getProducts();
    this.isLoading$ = this.service.getIsLoading();
    this.error$ = this.service.getError();
  }

  addProductCart(product) {
    this.service.dispatchAddToCart(product);
  }

}
