import { Injectable } from '@angular/core';
import { Customer } from './models/customer';

@Injectable()
export class CustomersService {
  customers:Customer[] = [];
  currentCustomer:Customer = {name: ''};
  constructor() { }

  add(customer:Customer) {
    if(this.customers.filter(c => c.name.toLowerCase() == customer.name.toLowerCase()).length == 0){
      this.customers.push(customer);
      return true;
    }
    return false;
  }

}