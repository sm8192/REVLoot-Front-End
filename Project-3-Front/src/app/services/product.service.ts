import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<any>('');
  }

  getProductById(id: number): Observable<any>{
    return this.http.get<any>('' + id);
  }

  addProduct(product: any): Observable<any>{
    return this.http.post<any>('', product);
  }

  getProductByName(name: string): Observable<any>{
    return this.http.get<any>('');
  }

  updateProduct(product: any, id: number): Observable<any>{
    return this.http.put('' + id, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete('' + id);
  }



}
