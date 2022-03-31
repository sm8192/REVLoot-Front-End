import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {


  products: any[] = []

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data)
  }

  onClick(productId: any): void {
    console.log(productId)
    this.route.navigate(['productItem', productId])
  }

}
