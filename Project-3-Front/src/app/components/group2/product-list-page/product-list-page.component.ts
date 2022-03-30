import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  product: any;

  products: any[] = [
    {
      "productId":1,
      "productName":"title",
      "price":"1.00",
      "description": "lorem ipsem",
      "productQty":0,
      "productImage":"https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png"
    },
    {
      "productId":1,
      "productName":"title",
      "price":"1.00",
      "description": "lorem ipsem",
      "productQty":5,
      "productImage":"https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png"
    },
    {
      "productId":1,
      "productName":"title",
      "price":"1.00",
      "description": "lorem ipsem",
      "productQty":5,
      "productImage":"https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png"
    },
    {
      "productId":1,
      "productName":"title",
      "price":"1.00",
      "description": "lorem ipsem",
      "productQty":5,
      "productImage":"https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(product: any): void {
    this.product = product;
  }

}
