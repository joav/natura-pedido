import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Input() customer:Customer;
  product:Product = {
    code: '',
    desc: '',
    price: '',
    customer: {
      name: ''
    }
  }
  constructor() { }

  ngOnInit() {
  }

}