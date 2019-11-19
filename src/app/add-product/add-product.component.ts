import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { ProductService } from '../product.service'
import { CustomersService } from '../customers.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Input('customer') customer:Customer = {name: ''};
  product:Product = {
    code: '',
    desc: '',
    price: '',
    points: 0
  }
  constructor(private pService:ProductService, private cService:CustomersService) {}

  ngOnInit() {
  }

  add(){
    this.pService.add(this.product);
    this.cService.add(this.customer)
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