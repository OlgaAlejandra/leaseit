import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath: string=environment.basePath;
  constructor(private http:HttpClient) {}
  getUsers() {
    return this.http.get<User[]>(this.basePath);
  }

  getUserId(id:any){
    return this.http.get<User>(`${this.basePath}/${id}`);
  }
  addUser(user: User) {
    return this.http.post<User>(
      this.basePath,
      user
    );  
  }
}
