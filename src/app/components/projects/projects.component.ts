import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/interfaces/project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService
    .getProjects()
    .subscribe((projects) => this.projects = projects);
  }

  addProject(project: Project){
    this.projectService.addProject(project).subscribe((project) => this.projects.push(project));
  }
}
