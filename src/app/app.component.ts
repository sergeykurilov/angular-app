import { Component } from '@angular/core';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  number = 2313213123213123;
  arr = [1, 2, 3, 4, 5, 6, 7, 8];
  obj = {
    a: 1, b: {c: 2}
    };
number2 = 2131321313213132;
  img = 'https://reactjs.org/logo-og.png'

  constructor() {
    setTimeout( () => {
        console.log('Time is over')
        this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
      },5000)
  }


  }

