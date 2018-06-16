import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDcILO6JhNH6xa9tGXKbxYYo4kW_iMX-fI',
      authDomain: 'firsttut-ab9e0.firebaseapp.com'
    });
  }
}
