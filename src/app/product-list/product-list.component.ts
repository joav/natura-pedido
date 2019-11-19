import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public pService:ProductService, public cService:CustomersService) { }

  ngOnInit() {
  }

}