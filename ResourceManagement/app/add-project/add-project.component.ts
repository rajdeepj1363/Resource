import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProjectsService } from '../services/projects.service';

export class Project {
  constructor(
    public project_name: string,
    public project_description: string,
    public project_start_date: string
  ) { }
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  @Output() projectdata = new EventEmitter<Project>();
  projectsData: any;
 // projectForm!: FormGroup;
  public obj: any = {};

   projectForm = new FormGroup({
    project_name: new FormControl(''),
    project_description: new FormControl(''),
    project_start_date: new FormControl(''),
   
  })
  constructor(private projectService: ProjectsService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
       this.router.navigate(['./projects']);
  }

  onSubmit() {
  }

  addProject(){
      this.projectService.postProjectdata(this.projectForm.value).subscribe();
       console.warn(this.projectForm.value);
  }
}
