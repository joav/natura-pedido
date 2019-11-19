import { Component } from '@angular/core';
import { TabsService } from './tabs.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(public tabs:TabsService){}
}
