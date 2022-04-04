import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchText: any;
  productStrings: any[] = [];
  productList: any[] = [];
  item: any;

  constructor(private router:Router, private productService: ProductService, public user: UserService) { }

  ngOnInit(): void {
    this.productService.getProductNames().subscribe(data => this.productList = data)
    console.log(this.productList)
  }

  onClick(productName: any){
    this.productService.getProductByName(productName).subscribe(data => {
      this.searchText = ''
      this.item = data[0].id
      // this.router.navigate(['productItem', this.item])
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate(['productItem', this.item]));
      
      });
  }

  onDropdown(e:Event){
    e.stopPropagation();
  }


}
