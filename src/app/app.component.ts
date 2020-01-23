import { Component } from '@angular/core';
import countries from '../app/_files/countries.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ths-responsive-poc';
  public countryList:{name:string, code:string}[] = countries;

}
