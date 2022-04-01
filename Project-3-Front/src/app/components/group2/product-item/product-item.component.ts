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

  constructor(private route: ActivatedRoute, private productService: ProductService,private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.productService.getProductById(this.id).subscribe(resp => { 
      this.productItem = resp;
      console.log(this.productItem)
    })
  }

  onFormSubmit(data: any){
    console.log(data)
//    this.cartService.addItem(data)
    //Uncommit when change to new obj for cart
    // this.productService.addProduct(this.productItem).subscribe(resp => {
    //   this.router.navigateByUrl("product-list");
  //  })
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
}
