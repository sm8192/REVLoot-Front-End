import { Injectable } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { elementAt } from 'rxjs';
import { CheckoutserviceService } from './checkoutservice.service';
import { Item } from '../classes/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Item[] = []

  constructor(private checkout: CheckoutserviceService) { }
  getCart(): Item[]{
    return this.cart
  }

  addItem(newItem:Item){

    let alreadyInCart = false;
    this.cart.forEach(item=>{
      if(item.id==newItem.id){
        alreadyInCart = true
      }
      })
      if(alreadyInCart == false){
    newItem.productQty = 1
    this.cart.push(newItem)
  }
  }

  increaseQuantity(newItem: Item, newQty: number){
    let alreadyInCart = false;
    this.cart.forEach(item => {
      if(newItem.id == item.id)
      {
        alreadyInCart = true;
      }
    })
    if(alreadyInCart == false){
      this.addItem(newItem)
      alreadyInCart  = true;
    }
    this.cart.forEach(item => {
      if(newItem.id == item.id)
      {
        item.productQty = newQty;
      }
    })
  }

  fillCart(){
    this.addItemById(1)
    this.addItemById(2)
    this.addItemById(3)
  }

  addItemById(id: number){
    let alreadyInCart = false;
    this.cart.forEach(item=>{
      if(item.id == id){
        alreadyInCart = true
      }
      })
      if(alreadyInCart == false){
        this.checkout.getItem(id).subscribe((data) => {data.productQty = 1;this.cart.push(data);
        })
      }
    
  }

  reduceQuantity(item: Item){
    this.cart.forEach(element => {
      if(element == item)
      {
        element.productQty -= 1
        if (element.productQty <= 0)
        {
          element.productQty = 1
        }
      }
    });
  }

  removeItem(oldItem:Item){
    this.cart.forEach((element, index) =>
    {if (element == oldItem)
    {this.cart.splice(index, 1)}}
    )
  }

  checkoutCart(){
    this.cart.forEach((element, index) =>
    {
      this.checkout.getItem(element.id).subscribe((data) => {
        data.productQty-=element.productQty;
        this.checkout.updateItem(data).subscribe(() => this.cart.splice(index, 1));
      })
    });
  }

  emptyCart(){
    this.cart = [];
  }

  getCartPrice(): number{
    let cartPrice = 0
  this.cart.forEach(item => {
    cartPrice += (item.price*item.productQty)
  });
  return cartPrice
  }

  getCartLength(): number{
    return this.cart.length
  }

  getQuantities(cart: Item[]): number[]{
    let quantities: number[] = []
    cart.forEach((item, index) => {
        quantities.push(0);
        this.checkout.getItem(item.id).subscribe(data=>{quantities[index]=data.productQty})
    });


    return quantities
  }



}