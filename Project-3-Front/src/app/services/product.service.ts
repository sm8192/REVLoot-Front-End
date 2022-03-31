import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get<any>('http://localhost:9191/api/v1/products/');
  }

  getProductNames(): Observable<any>{
    return this.http.get<any>('http://localhost:9191/api/v1/products/getNames');
  }

  getProductById(id: number): Observable<any>{
    return this.http.get<any>('http://localhost:9191/api/v1/products/' + id);
  }

  addProduct(product: any): Observable<any>{
    return this.http.post<any>('http://localhost:9191/api/v1/products/add', product);
  }

  getProductByName(name: string): Observable<any>{
    return this.http.get<any>('http://localhost:9191/api/v1/products/get/' + name);
  }

  updateProduct(product: any, id: number): Observable<any>{
    return this.http.put('http://localhost:9191/api/v1/products/' + id, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete('http://localhost:9191/api/v1/products/' + id);
  }
}
