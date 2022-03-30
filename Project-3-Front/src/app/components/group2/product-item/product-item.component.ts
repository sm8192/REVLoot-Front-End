import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

  productItem: any; 
  id: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("productId")
    this.id=1;
    this.productService.getProductById(this.id).subscribe(resp => { 
      this.productItem = resp;
    })
  }

  onFormSubmit(data: any){
    this.productService.addProduct(this.productItem).subscribe(resp => {
      //CHANGE ON PRODACTS PAGE
      this.router.navigateByUrl("product-list");
    })
  }

  ChangeQ(e: any){
    if (e == "add"){
      this.productItem.productQty += 1;
    }
    if (e == "remove"){
      let newValue = this.productItem.productQty - 1;
      newValue = newValue < 0 ? 0 : newValue;
      this.productItem.productQty = newValue;
    }
  }

  get totalPrice(){
    return this.productItem.productQty * this.productItem.price;
  }
}
