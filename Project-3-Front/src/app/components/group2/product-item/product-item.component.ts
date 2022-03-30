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

  //delete productItem after got service
  productItem = new Product(1, "Ring Video Doorbell 3 – enhanced wifi, improved motion detection, easy installation", 15.05, "1080p HD video doorbell with enhanced features that let you see, hear, and speak to anyone from your phone, tablet, or PC. An upgrade from the original Ring Video Doorbell 2, enjoy improved motion detection, privacy zones and audio privacy, and dual-band (2.4 or 5.0 GHz) wifi connectivity. Receive mobile notifications when anyone presses your doorbell or triggers your built-in motion sensors. Powered by the rechargeable battery pack or connects to doorbell wires for constant power. Easily setup by connecting your Ring Video Doorbell 3 to wifi through the Ring app and mounting with the included tools. With a Ring Protect Plan (subscription sold separately), record all your videos, review what you missed for up to 60 days, and share videos and photos. Connect your Ring doorbell with Alexa to hear announcements on your compatible Echo device when your doorbell is pressed and see a live view of your camera if you have an Echo device with a screen. Talk to visitors by saying “Alexa, talk to the front door.", 0, "https://www.signs4fun.com/assets/images/srs.jpg")
  // productItem: any; 
  id: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("productId")
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
