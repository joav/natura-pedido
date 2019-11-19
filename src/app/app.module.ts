import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from './product.service';
import { TabsService } from './tabs.service';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomersService } from './customers.service';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FooterNavComponent, AddProductComponent, ProductListComponent, CustomerListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService, TabsService, CustomersService]
})
export class AppModule { }
