import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Customer } from './models/customer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = [];
  constructor() { }

  add(product:Product){
    this.products.push(product);
  }

  total() {
    return this.products.reduce((last:number,current:Product) => last + +current.price, 0)
  }

  totalPoints() {
    return this.products.reduce((last:number,current:Product) => last + +current.points, 0)
  }

  countProducts(customer:Customer = null){
    return this.products.filter(p => p.customer.name.toLowerCase() == customer.name.toLowerCase()).length;
  }

}