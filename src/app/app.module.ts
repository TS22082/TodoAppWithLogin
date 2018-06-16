import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './main/todo/todo.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: TodoComponent, canActivate: [AuthGuardService] },
  { path: '', component: SignInComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
