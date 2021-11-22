import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  @Output() onAddProject: EventEmitter<Project> = new EventEmitter;

  name!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.name){
      alert("Please enter a project name")
      return
    }

    const newProject =  {
      name: this.name
    }

    this.onAddProject.emit(newProject);
    
    this.name = ''

  }

}
