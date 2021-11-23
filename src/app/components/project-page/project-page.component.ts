import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/interfaces/project';
import { TodoItem } from 'src/app/interfaces/todo-item';
import { TodoItemService } from 'src/app/services/todo-item.service';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projectId!:string; 
  project!: Project;
  todoItems: TodoItem[] = [];

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private todoItemService: TodoItemService) { 
    this.projectId = this.route.snapshot.params['id'];
    this.projectService.getProject(this.projectId).subscribe((project) => this.project = project);
  }

  ngOnInit(): void {
  }

  // addTodoItem(todoItem: TodoItem): Observable<TodoItem>{
  //   return this.todoItemService.addTodoItem<TodoItem>(this.project,todoItem).subscribe((todoItem) => this.todoItems.push(todoItem));
  // }

  addTodoItem(todoItem: TodoItem){
    this.todoItemService.addTodoItem(todoItem).subscribe((todoItem) => this.todoItems.push(todoItem))
  }


}
