import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared-classes-and-types/discount-offers';
import { ICategory } from '../Shared-classes-and-types/icategory';
import { IProduct } from '../Shared-classes-and-types/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount!: DiscountOffers;
  storName!:string;
  storeLogo!:string;
  productList!:IProduct[];
  categoryList!:ICategory[];
  clientName!:string;
  isPurchased!:boolean;

  constructor() {
    this.Discount = DiscountOffers.tenPercent;
    this.storName = 'amazon';
    this.storeLogo = 'https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    this.productList=[
      {ID:1, img:'image-1', Name:'iphone 13', Quantity:100, Price:1000},
      {ID:2, img:'image-1', Name:'samsung s21', Quantity:10, Price:900},
      {ID:2, img:'image-1', Name:'oppo', Quantity:200, Price:700},
  ];
    this.categoryList=[{ID:'electronics', Name:'mobiles'}, {ID:'electronics', Name:`Tv's`},
    {ID:'electronics', Name:'laptops'}]
    this.clientName = '';
    this.isPurchased=false
   }

  ngOnInit(): void {
  }

  onPurchase(){

    this.isPurchased = !this.isPurchased
  }

}
