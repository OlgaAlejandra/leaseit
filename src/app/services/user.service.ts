import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath: string=environment.api_url;
  constructor(private http:HttpClient) {}
  getUsers() {
    return this.http.get<User[]>(`${this.basePath}/users`);
  }

  getUserId(id:any){
    return this.http.get<User>(`${this.basePath}/users/${id}`);
  }
  addUser(user: User) {
    return this.http.post<User>(`${this.basePath}/users`,user);  
  }
}
