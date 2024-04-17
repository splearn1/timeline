import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timeline } from '../models/timeline';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private url = 'http://localhost:3000/users';

  constructor(private user:UserService,private http:HttpClient) {}

// I NEED TO DELETE THIS UNNECESSARY SERVICE!!!!!
  getTimelines(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

}
