import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';

export class Project {
  constructor(
    public project_name: string,
    public project_description: string,
    public project_start_date: string
  ) { }
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Output() projectdata = new EventEmitter<Project>();
  projectsData: any;
  projectForm!: FormGroup;
  public obj: any = {};
  title = "Manage Project";

  constructor(private projectService: ProjectsService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  openProject() {

       this.router.navigate(['/add-project']);
  }

  export() {
  }

  deleterow(id) {
  }
}
