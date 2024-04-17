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

    refreshUserData(){
      return this.http.get(`${environment.apiUrl}/web/user_data`).pipe(
        tap((res:any) => {
          this.setCurrentUser(res.current_user);
        })
      );
    }

    // This method creates a new user.
    signUp(user:any) {
      // return this.http.post<{ token: string }>('http://localhost:3000/signup', user);
      // return this.http.post(`${environment.apiUrl}/users`, data)
      return this.http.post(`${environment.apiUrl}/users`, user);
    }

    changeFirstName(id:number,newFirstName:string){
      console.log(newFirstName);
      return this.http.patch(`${environment.apiUrl}users/${id}`,{first_name:newFirstName})

    }

  // updateUser(user:User) {
  //   return this.http.put(`http://localhost:3000/users/${user.id}`, user);
  // }
  // deleteUser(id:number) {
  //   return this.http.delete(`http://localhost:3000/users/${id}`);
  // }
}
