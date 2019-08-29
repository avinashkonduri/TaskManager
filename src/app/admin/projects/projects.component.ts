import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../../project.service';
import { Project } from 'src/app/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
projects: Project[];
newProject: Project = new Project();
  // tslint:disable-next-line: variable-name
  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this._projectService.getAllProjects().subscribe(
      (data) => {
        console.log(data);
        this.projects.push(data);
      }
    );
  }
onSaveClick(){
  this._projectService.insertProject(this.newProject).subscribe(
    (response) => {
      this.projects.push(this.newProject);
    }, (error: any) => {
console.log(error);
  });
}
}
