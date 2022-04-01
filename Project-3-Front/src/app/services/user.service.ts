import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api_url = "http://localhost:9191"

  constructor(private http: HttpClient, private router: Router) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.api_url + "/api/v1/users");
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.api_url + "/api/v1/users/" + id);
  }

  getUserByCredentials(username: String, password: String) : Observable<User>{
    return this.http.get<User>(this.api_url + `/api/v1/users?email=${username}&password=${password}`);
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.api_url + "/api/v1/users", user)
  }

  updateUser(user: User): Observable<any>{
    return this.http.put<User>(this.api_url + `/api/v1/users/${user.userId}`, user)
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete<User>(this.api_url + "/api/v1/users/" + id)
  }

  isUserLoggedIn(){
    let user = localStorage.getItem('username')
    return !(user===null)
  }

  logOut(){
    localStorage.removeItem('username')
    this.router.navigate(['login'])
  }









  


}
