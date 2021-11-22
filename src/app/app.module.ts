import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsItemComponent } from './components/projects-item/projects-item.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { AddTodoItemComponent } from './components/add-todo-item/add-todo-item.component';

const appRoutes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'project-detail/:id', component: ProjectPageComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsItemComponent,
    AddProjectComponent,
    ProjectPageComponent,
    AddTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularMyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
