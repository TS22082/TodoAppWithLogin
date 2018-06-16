import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: Http) { }

  getAppName() {
    return this.http.get('https://fir-angular-e9a48.firebaseio.com/appName.json')
    .pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }

  storeTodos(todos: any[]) {
    return this.http.put('https://fir-angular-e9a48.firebaseio.com/data.json', todos);
  }

  getTodos() {
    return this.http.get('https://fir-angular-e9a48.firebaseio.com/data.json')
    .pipe(map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    ));
  }
}
