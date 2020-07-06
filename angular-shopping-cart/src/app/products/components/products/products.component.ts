import { ShoppingCartService } from './../../../shopping-cart/shopping-cart.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private service: ProductService, private cartService: ShoppingCartService) {
    this.products$ = this.service.load();
  }

  ngOnInit(): void {
  }

  addProductCart(product: Product): void {
    this.cartService.addProduct();
  }
}
