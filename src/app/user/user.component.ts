import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';
import { Router } from '@angular/router';
import { User } from './shared/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  filter: string;

  nameSearch = false;

  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  searchUsers() {
    this.userService.getUsersByName(this.filter).subscribe(obs => this.users = obs);
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(obs => this.users = obs);
  }

  addUser() {
    this.router.navigate(['form']);
  }

  updateFilter(value) {
    this.filter = value;
    this.searchUsers();
  }

  clearFilter() {
    this.filter = '';
    this.fetchUsers();
  }
}
