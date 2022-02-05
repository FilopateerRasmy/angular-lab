import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductServiceService } from '../services/product-service.service';
import { DiscountOffers } from '../Shared-classes-and-types/discount-offers';
import { ICategory } from '../Shared-classes-and-types/icategory';
import { IProduct } from '../Shared-classes-and-types/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  Discount!: DiscountOffers;
  storName!:string;
  storeLogo!:string;
  productList!:IProduct[];
  categoryList!:ICategory[];
  clientName!:string;
  isPurchased!:boolean;
  sub!:Subscription;
  constructor(private prductService:ProductServiceService) {
    this.Discount = DiscountOffers.tenPercent;
    this.storName = 'amazon';
    this.storeLogo = 'https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

    this.categoryList=[{ID:'electronics', Name:'mobiles'}, {ID:'electronics', Name:`Tv's`},
    {ID:'electronics', Name:'laptops'}]
    this.clientName = '';
    this.isPurchased=false;
   }

  ngOnInit(): void {
    this.sub = this.prductService.getAllProducts().subscribe(products =>{
      this.productList = products;
    })
  }

  onPurchase(){

    this.isPurchased = !this.isPurchased
  }

  renderValues(){
   this.sub = this.prductService.getAllProducts().subscribe(products =>{
       this.productList = products;
     })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
