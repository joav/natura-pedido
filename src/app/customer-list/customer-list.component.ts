import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { ProductService } from '../product.service';
import { CustomersService } from '../customers.service';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer:Customer = {
    name: ''
  };

  constructor(public pService:ProductService, public cService:CustomersService, private tabs:TabsService) {
    this.cService.currentCustomer = {name: ''};
  }

  ngOnInit() {
  }

  add(){
    this.cService.add(this.customer);
    this.customer = {
      name: ''
    };
  }

  addProduct(c:Customer){
    this.cService.currentCustomer = c;
    this.tabs.change({creationActive: true})
  }

  viewProducts(c:Customer) {
    this.cService.currentCustomer = c;
    this.tabs.change({listActive: true})
  }

}