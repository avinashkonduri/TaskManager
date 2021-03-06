import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {AboutComponent} from './admin/about/about.component';
import { ProjectsComponent } from './admin/projects/projects.component';
const routes: Routes = [
  {path: 'dashboad', component: DashboardComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'projects' , component: ProjectsComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
