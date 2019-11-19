import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  customersActive = false;
  creationActive = true;
  listActive = false;
  constructor() { }

  change({ customersActive = false, creationActive = false, listActive = false}){
    this.customersActive = customersActive;
    this.creationActive = creationActive;
    this.listActive = listActive;
  }

}