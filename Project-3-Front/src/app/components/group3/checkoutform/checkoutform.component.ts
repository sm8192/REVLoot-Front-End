import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit {




  constructor(private route:ActivatedRoute, private cartService:CartService, private router: Router) { }

  ngOnInit(): void {}

  onsubmit(checkoutform:NgForm) {
  this.cartService.checkoutCart()
   this.router.navigateByUrl("ordercomplete")
  }

}
