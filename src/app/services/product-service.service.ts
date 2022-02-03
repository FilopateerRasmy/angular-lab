import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../Shared-classes-and-types/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products:IProduct[] = [
    {ID:1, img:'image-1', Name:'iphone 13', Quantity:100, Price:1000},
    {ID:2, img:'image-1', Name:'samsung s21', Quantity:10, Price:900},
    {ID:3, img:'image-1', Name:'oppo', Quantity:200, Price:700},
];

productsWatcher: BehaviorSubject<IProduct[]> = new BehaviorSubject(this.products)
productObservable = this.productsWatcher.asObservable();
  constructor() { }


  getAllProducts(){
    return this.productObservable;
  }
  getProductById(prodId:number){
    const product = this.products.find(product => product.ID === prodId);
    if(!product || isNaN(prodId)) null;

    return product;
  }

  addProduct(product:IProduct){
    this.products.push( product);
    this.productsWatcher.next(this.products);
  }

}
