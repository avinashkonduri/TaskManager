import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent
  ]
})
export class AdminModule { }
