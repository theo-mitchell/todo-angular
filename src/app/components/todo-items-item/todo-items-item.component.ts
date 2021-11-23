import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/todo-item';

@Component({
  selector: 'app-todo-items-item',
  templateUrl: './todo-items-item.component.html',
  styleUrls: ['./todo-items-item.component.css']
})
export class TodoItemsItemComponent implements OnInit {
  @Input() projectId!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
