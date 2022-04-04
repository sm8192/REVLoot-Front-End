import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/services/item';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  quantities: number[] = []

  cartPrice: number = 0;

  shipping: number = 5;
  tax:number = 5; 

  subTotal: number = 0;

  constructor(private route:ActivatedRoute, public cartService: CartService, public user: UserService, private router: Router) {
    this.calculatePrice()
    this.quantities = this.cartService.getQuantities(cartService.getCart())
  }

  ngOnInit(): void {
  }


  increaseToCart(item: Item){
    this.cartService.increaseQuantity(item,2)
    this.calculatePrice()
  }
  reduceFromCart(item: Item){
    this.cartService.reduceQuantity(item)
        this.calculatePrice()
  }
  removeFromCart(item: Item, index: number){
    let tempLength = this.cartService.getCartLength()
    this.cartService.removeItem(item)
    if(tempLength > this.cartService.getCartLength())
    {
        this.quantities.splice(index, 1)
    }
    this.calculatePrice()
  }
  calculatePrice(){
    this.cartPrice = 0;
    this.subTotal = 0;
    this.tax = 0;
    if(this.cartService.getCartLength()> 0){
  this.cartPrice = this.cartService.getCartPrice()
  this.subTotal = this.cartPrice
  this.tax=this.cartPrice*0.075
  this.cartPrice += this.tax
  this.cartPrice += this.shipping
    }
  }

  checkout(){
    this.router.navigateByUrl("checkout")
  }
  isUserLoggedIn(){
    return this.user.isUserLoggedIn();
  }

}

