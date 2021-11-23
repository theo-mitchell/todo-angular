import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
// import { Project } from '../interfaces/project';
import { TodoItem } from '../interfaces/todo-item';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  private apiUrl = 'http://localhost:8080/todo-items'

  constructor(private http:HttpClient) {}

  getTodoItems(projectId?:number): void{
    if (projectId) {
      console.log("meow");
      console.log(this.apiUrl+"?projectId="+projectId)
    }
  }

  addTodoItem(todoItem: TodoItem): Observable<TodoItem>{
    return this.http.post<TodoItem>(this.apiUrl, todoItem, httpOptions);
  }
}
