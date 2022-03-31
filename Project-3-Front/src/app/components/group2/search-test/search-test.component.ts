import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.css']
})
export class SearchTestComponent implements OnInit {
  searchText: any;
  productStrings: any[] = [];
  productList: any[] = [];

  products = [
    'Rubber Ball',
    'Ballpoint Pen',
    'Pencil',
    'Mousepad',
    'Gupta',
    'Rubber Ball',
    'Ballpoint Pen',
    'Pencil',
    'Mousepad',
    'Gupta',
    'Rubber Ball',
    'Ballpoint Pen',
    'Pencil',
    'Mousepad',
    'Gupta',
    'Rubber Ball',
    'Ballpoint Pen',
    'Pencil',
    'Mousepad',
    'Gupta',
    'Rubber Ball',
    'Ballpoint Pen',
    'Pencil',
    'Mousepad',
    'Gupta',

  ];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductNames().subscribe(data => this.productList = data)
    
  }

}
