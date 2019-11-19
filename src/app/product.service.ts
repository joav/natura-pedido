import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = [
    {
      code: '555555',
      desc: 'Ekos',
      points: 5,
      price: '1000000',
      customer: {
        name: 'Luz Marina'
      }
    }
  ];
  constructor() { }

  add(product:Product){
    this.products.push(product);
  }

}