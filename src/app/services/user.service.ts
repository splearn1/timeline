import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUserBehaviorSubject = new BehaviorSubject<User | null>(null);

  constructor(private http:HttpClient, private router:Router) { }
    setCurrentUser(user: User | null){
      this.currentUserBehaviorSubject.next(user);
    }

    getBootstrapData(){
      return this.http.get(`${environment.apiUrl}/web/bootstrap`).pipe(
        tap((res:any) => {
          this.setCurrentUser(res.current_user);
        })
      );
    }

  // createUser(user:User) {
  //   return this.http.post('http://localhost:3000/users', user);
  // }
  // getUserById(id:number) {
  //   return this.http.get<User>(`http://localhost:3000/users/${id}`);
  // }
  // updateUser(user:User) {
  //   return this.http.put(`http://localhost:3000/users/${user.id}`, user);
  // }
  // deleteUser(id:number) {
  //   return this.http.delete(`http://localhost:3000/users/${id}`);
  // }
}
