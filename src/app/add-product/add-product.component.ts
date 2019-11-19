import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CustomersService } from '../customers.service';
import { TabsService } from '../tabs.service';

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
    points: 0,
    customer: {name: ''}
  }
  constructor(private pService:ProductService, private cService:CustomersService, private tabs:TabsService) {
    if(this.tabs.lastPage == 'products'){
      this.cService.currentCustomer = {name: ''};
    }
  }

  ngOnInit() {
  }

  add(){
    this.product.customer = this.customer;
    this.pService.add(this.product);
    this.cService.add(this.customer)
    this.customer = {name: ''};
    const product:Product = {
      code: '',
      desc: '',
      price: '',
      customer: this.customer,
      points: 0
    }
    this.product = product;
  }

}