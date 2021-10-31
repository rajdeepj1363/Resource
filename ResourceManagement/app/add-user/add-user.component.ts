import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

export class User {
  constructor(
    public employee_name: string,
    public employee_email: string,
    public employee_mobile: string,
    public employee_project: string,
    public employee_birth_date: string,
    public employee_added_date: string
  ) { }
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Output() userdata = new EventEmitter<User>();
  usersData: any;
  userForm!: FormGroup;
  public obj: any = {};

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
  }

  onSubmit() {
  }

  addUser(){
  }

}
