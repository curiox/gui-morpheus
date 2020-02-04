import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: -1,
      nome: ''
    });
  }

  ngOnInit() {
  }

  save() {
    console.log(this.userForm.value);
    this.service.addUser(this.userForm.value)
    .subscribe(
      succ => this.router.navigate([''])
    );
  }

  cancel() {
    this.router.navigate(['']);
  }

}
