import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/services/item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

  productItem: Item = {id: 0, price: 0, productName: "", description: "", productQty: 0, productImage: ""}
  id: any;
  orderedItems = 0;
  orderCount = 0;
  inventory: any;

  constructor(private route: ActivatedRoute, private productService: ProductService,private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.productService.getProductById(this.id).subscribe(resp => { 
      this.productItem = resp;
      console.log(this.productItem)
      this.inventory = this.productItem.productQty
    })
  }

  onFormSubmit(data: any){
    console.log(data)
    this.cartService.addItem(data)
    if (this.orderCount > 1)
    {
      this.cartService.increaseQuantity(data, this.orderCount)
    }
    this.orderCount = 0
    this.router.navigateByUrl("productList");
  }

  ChangeQ(e: any){
    if (e == "add"){
      let newValue = this.orderCount + 1;
      newValue = newValue > this.productItem.productQty ? this.productItem.productQty : newValue;
      this.orderCount = newValue;

    }
    if (e == "remove"){
      let newValue = this.orderCount - 1;
      newValue = newValue < 0 ? 0 : newValue;
      this.orderCount = newValue;
    }
  }

  get totalPrice(){
    return this.orderCount * this.productItem.price;
  }

  onClick(){
    this.cartService.addItem(this.productItem)
    if (this.orderCount > 1)
    {
      this.cartService.increaseQuantity(this.productItem, this.orderCount)
    }
    this.orderCount = 0
  }

}
