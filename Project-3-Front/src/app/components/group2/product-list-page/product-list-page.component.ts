import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {


  products: any[] = 
  [{
    "id": 1,
    "productName": "Toyota",
    "price": 85.38,
    "description": "Tacoma",
    "productQty": 7,
    "productImage": "http://dummyimage.com/161x100.png/cc0000/ffffff"
  }, {
    "id": 2,
    "productName": "Ford",
    "price": 86.37,
    "description": "Econoline E150",
    "productQty": 1,
    "productImage": "http://dummyimage.com/123x100.png/cc0000/ffffff"
  }, {
    "id": 3,
    "productName": "Ford",
    "price": 55.15,
    "description": "Explorer Sport Trac",
    "productQty": 4,
    "productImage": "http://dummyimage.com/199x100.png/dddddd/000000"
  }, {
    "id": 4,
    "productName": "Suzuki",
    "price": 55.65,
    "description": "Grand Vitara",
    "productQty": 7,
    "productImage": "http://dummyimage.com/115x100.png/cc0000/ffffff"
  }, {
    "id": 5,
    "productName": "Acura",
    "price": 76.66,
    "description": "NSX",
    "productQty": 8,
    "productImage": "http://dummyimage.com/199x100.png/ff4444/ffffff"
  }, {
    "id": 6,
    "productName": "Saturn",
    "price": 37.43,
    "description": "S-Series",
    "productQty": 10,
    "productImage": "http://dummyimage.com/235x100.png/ff4444/ffffff"
  }, {
    "id": 7,
    "productName": "Mercedes-Benz",
    "price": 32.73,
    "description": "S-Class",
    "productQty": 10,
    "productImage": "http://dummyimage.com/104x100.png/ff4444/ffffff"
  }, {
    "id": 8,
    "productName": "Mercury",
    "price": 84.98,
    "description": "Cougar",
    "productQty": 1,
    "productImage": "http://dummyimage.com/235x100.png/dddddd/000000"
  }, {
    "id": 9,
    "productName": "Maybach",
    "price": 34.27,
    "description": "57",
    "productQty": 5,
    "productImage": "http://dummyimage.com/148x100.png/cc0000/ffffff"
  }, {
    "id": 10,
    "productName": "Chevrolet",
    "price": 21.63,
    "description": "Malibu",
    "productQty": 1,
    "productImage": "http://dummyimage.com/171x100.png/5fa2dd/ffffff"
  }, {
    "id": 11,
    "productName": "Mitsubishi",
    "price": 70.54,
    "description": "Precis",
    "productQty": 4,
    "productImage": "http://dummyimage.com/128x100.png/5fa2dd/ffffff"
  }, {
    "id": 12,
    "productName": "Ford",
    "price": 65.22,
    "description": "F150",
    "productQty": 2,
    "productImage": "http://dummyimage.com/109x100.png/cc0000/ffffff"
  }, {
    "id": 13,
    "productName": "Dodge",
    "price": 74.75,
    "description": "D150",
    "productQty": 7,
    "productImage": "http://dummyimage.com/231x100.png/dddddd/000000"
  }, {
    "id": 14,
    "productName": "Infiniti",
    "price": 40.43,
    "description": "IPL G",
    "productQty": 7,
    "productImage": "http://dummyimage.com/239x100.png/5fa2dd/ffffff"
  }, {
    "id": 15,
    "productName": "Nissan",
    "price": 92.78,
    "description": "GT-R",
    "productQty": 3,
    "productImage": "http://dummyimage.com/219x100.png/5fa2dd/ffffff"
  }, {
    "id": 16,
    "productName": "Mercedes-Benz",
    "price": 24.89,
    "description": "SL-Class",
    "productQty": 2,
    "productImage": "http://dummyimage.com/168x100.png/cc0000/ffffff"
  }, {
    "id": 17,
    "productName": "Bentley",
    "price": 29.28,
    "description": "Azure T",
    "productQty": 1,
    "productImage": "http://dummyimage.com/190x100.png/5fa2dd/ffffff"
  }, {
    "id": 18,
    "productName": "Ford",
    "price": 49.48,
    "description": "E-Series",
    "productQty": 2,
    "productImage": "http://dummyimage.com/215x100.png/ff4444/ffffff"
  }, {
    "id": 19,
    "productName": "Acura",
    "price": 59.07,
    "description": "Integra",
    "productQty": 2,
    "productImage": "http://dummyimage.com/135x100.png/cc0000/ffffff"
  }, {
    "id": 20,
    "productName": "Cadillac",
    "price": 28.95,
    "description": "Eldorado",
    "productQty": 6,
    "productImage": "http://dummyimage.com/152x100.png/5fa2dd/ffffff"
  }]

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data)
  }

  onClick(productId: any): void {
    console.log(productId)
    this.route.navigate(['productItem', productId])
  }

}