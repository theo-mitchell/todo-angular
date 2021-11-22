import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/projects'

  constructor(private http:HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  getProject(projectId: string): Observable<Project> {
    return this.http.get<Project>(this.apiUrl + '/' + projectId);
  }

  addProject(project: Project): Observable<Project>{
    return this.http.post<Project>(this.apiUrl, project, httpOptions)
  }
}
