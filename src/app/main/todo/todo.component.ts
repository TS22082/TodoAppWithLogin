import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  appName = this.sharedService.getAppName();
  todos = [];
  weatherData = [];

  addTodo( todo: string) {
    if (this.todos == null) {
      this.todos = [];
      this.todos.push(
        { task: todo }
      );
    } else {
      this.todos.push(
        { task: todo }
      );
    }
    console.log(this.todos);
    this.saveTodos();
  }

  saveTodos() {
    this.sharedService.storeTodos(this.todos)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  removeTodo(i) {
    if (confirm('Would you like to delete this item?')) {
      this.todos.splice(i, 1);
      this.saveTodos();
    }
  }

  onGetTodos() {
    this.sharedService.getTodos()
    .subscribe(
      (todos: any[]) => this.todos = todos,
      (error) => console.log(error)
    );
  }

  ngOnInit() {
    this.onGetTodos();
  }
}
