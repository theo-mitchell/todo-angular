import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/todo-item';
// import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {
  @Input() projectId!: string;
  @Output() onAddTodoItem: EventEmitter<TodoItem> = new EventEmitter;
  
  // myDpOptions: IAngularMyDpOptions = {
  //   dateRange: false,
  //   dateFormat: 'dd.mm.yyyy'
  // };

  name!:string;
  description!:string
  dueDate!:string;
  priority!:'High'|'Medium'|'Low';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.name){
      alert("Please enter a project name")
      return
    }

    const newItem =  {
      name: this.name,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      projectId: parseInt(this.projectId)
    }

    this.onAddTodoItem.emit(newItem);
    
    this.name = '';
    this.description = '';
    this.dueDate = '';
    // this.priority = '';
  }

}
