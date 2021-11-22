import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/interfaces/project';



@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projectId!:string; 
  project!: Project;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { 
    this.projectId = this.route.snapshot.params['id'];
    this.projectService.getProject(this.projectId).subscribe((project) => this.project = project);
  }

  ngOnInit(): void {
  }

}
