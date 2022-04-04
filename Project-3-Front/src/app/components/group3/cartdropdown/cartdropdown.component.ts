import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/classes/item';

@Component({
  selector: 'app-cartdropdown',
  templateUrl: './cartdropdown.component.html',
  styleUrls: ['./cartdropdown.component.css']
})
export class CartdropdownComponent implements OnInit {

  quantities: number[] = [10,15,16]

  constructor(private route:ActivatedRoute, public cartService: CartService) {
  }

  ngOnInit(): void {
  }


  increaseToCart(item: Item){
    this.cartService.increaseQuantity(item,1)
  }
  reduceFromCart(item: Item){
    this.cartService.reduceQuantity(item)
  }
  removeFromCart(item: Item){
    this.cartService.removeItem(item)
  }


}
