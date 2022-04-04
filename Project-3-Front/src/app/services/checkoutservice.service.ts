import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Item } from '../classes/item';

@Injectable({
  providedIn: 'root'
})
export class CheckoutserviceService {

  url = "http://localhost:9191/api/v1/products"

  constructor(private http: HttpClient) { }

  getInventory(): Observable<Item[]>{
    return this.http.get<Item[]>(this.url)
  }

  getItem(id: number): Observable<Item>{
    return this.http.get<Item>(this.url + "/" + id)
  }

  updateItem(item: Item){
    this.http.put(this.url + "/" + item.id, item )
  }

}
