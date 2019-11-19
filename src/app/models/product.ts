import { Customer } from './customer';
export interface Product {
  code:string;
  desc:string;
  price:string;
  customer:Customer;
}