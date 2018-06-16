import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: Http, private authService: AuthService) { }

  getAppName() {
    const token = this.authService.getToken();
    return this.http.get('https://fir-angular-e9a48.firebaseio.com/appName.json?auth=', token)
    .pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }

  storeTodos(todos: any[]) {
    const token = this.authService.getToken();
    return this.http.put('https://fir-angular-e9a48.firebaseio.com/data.json?auth=' + token, todos);
  }

  getTodos() {
    const token = this.authService.getToken();
    return this.http.get('https://fir-angular-e9a48.firebaseio.com/data.json?auth=' + token)
    .pipe(map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    ));
  }
}
