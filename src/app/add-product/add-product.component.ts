import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Input() customer:Customer = {name: ''};
  product:Product = {
    code: '',
    desc: '',
    price: '',
    points: 0,
    customer: this.customer
  }
  constructor(private service:ProductService) {}

  ngOnInit() {
  }

  add(){
    this.service.add(this.product);
    const customer:Customer = {name: ''};
    const product:Product = {
      code: '',
      desc: '',
      price: '',
      customer: customer,
      points: 0
    }
    this.product = product;
  }

}