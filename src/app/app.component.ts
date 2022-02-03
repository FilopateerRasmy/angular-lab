import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductServiceService } from './services/product-service.service';
// contains the meta data that defines html , css files and the selector that we used to call a class
@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

@ViewChild(ProductsComponent) productsComp!:ProductsComponent;


constructor(private productService:ProductServiceService){}
  showProducts(){
    this.productsComp.renderValues()
  }
addProduct(){
  const product = {ID:4, img:'image-3', Name:'playstation', Quantity:500, Price:1000}
this.productService.addProduct(product)
}

}
