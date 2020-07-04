import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any[] = [];

  private readonly BASE_URL = environment.baseUrl;

  private readonly API = `${this.BASE_URL}/products`;

  private readonly isLocal = environment.isLocal;

  constructor(private http: HttpClient) {}

  load() {
    if (this.isLocal) {
      for (let num = 1; num <= 10; num += 1) {
        this.addProducts(num);
      }
      return of(this.products);
    }
    return this.http.get<Product[]>(this.API);
  }

  private addProducts(i) {
    this.products.push({
      id: i,
      price: (Math.random() * (0.0 - 10.0) + 10.0).toFixed(2),
      status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
      discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
      discount: (Math.random() * (0.0 - 10.0) + 10.0).toFixed(2),
      name: ['Coffee'][Math.floor(Math.random() * 1)],
      description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)],
      image: i
    });
  }

  create(record: Product) {
    return this.http.post<Product>(this.API, record);
  }

  update(record: Product) {
    return this.http.put<Product>(`${this.API}/${record.id}`, record);
  }

  remove(id: string) {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }
}
