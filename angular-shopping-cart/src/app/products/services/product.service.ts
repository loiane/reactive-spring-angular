import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from './../../../environments/environment';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  private readonly BASE_URL = environment.baseUrl;
  private readonly API = `${this.BASE_URL}/products`;
  private readonly isLocal = environment.isLocal;

  constructor(private http: HttpClient) {}

  load(): Observable<Product[]> {
    if (this.isLocal) {
      for (let num = 1; num <= 10; num++) {
        this.addProducts(num);
      }
      return of(this.products);
    }
    return this.http.get<Product[]>(this.API);
  }

  create(record: Product): Observable<Product> {
    return this.http.post<Product>(this.API, record);
  }

  update(record: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${record.id}`, record);
  }

  remove(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }

  private addProducts(i: number): void {
    this.products.push({
      id: `${i}`,
      price: parseFloat((Math.random() * (0.0 - 10.0) + 10.0).toFixed(2)),
      status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
      discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
      discount: parseFloat((Math.random() * (0.0 - 10.0) + 10.0).toFixed(2)),
      name: ['Coffee'][Math.floor(Math.random() * 1)],
      description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)],
      image: `${i}`
    });
  }
}
