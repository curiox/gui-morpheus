import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserService {

  private url = '/usuario';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get<User[]>(this.getUrl(), {headers: this.headers});
  }

  getUsersByName(name: string) {
    return this.http.post<User[]>(this.getUrl() + '/name', name, {headers: this.headers});
  }

  addUser(user: User) {
    return this.http.post<string>(this.getUrl() + '', JSON.stringify(user), {headers: this.headers});
  }

  private getUrl() {
    return 'http://localhost:8090/usuario';
  }
}
