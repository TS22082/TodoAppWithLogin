import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyACWwzswQJGda-tNbgGXtlxtnt9AnxmDcs',
      authDomain: 'fir-angular-e9a48.firebaseapp.com'
    });
  }
}
