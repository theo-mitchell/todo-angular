import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.css']
})
export class ProjectsItemComponent implements OnInit {
  @Input() project!: Project;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
