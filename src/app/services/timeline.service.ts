import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timeline } from '../models/timeline';
import { Observable } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  // getTimelines(): Observable<Timeline[]> {
  //   return this.http.get<Timeline[]>(this.url);
  // }
  getTimelines(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getTimelineById(id: number): Observable<Timeline> {
    return this.http.get<Timeline>(`${this.url}/${id}`);
  }

  createTimeline(timeline: { body: string; is_completed: boolean }): Observable<Timeline> {
    return this.http.post<Timeline>(this.url, timeline);
  }

  updateTimeline(timeline: Timeline): Observable<Timeline> {
    return this.http.put<Timeline>(`${this.url}/${timeline}`, timeline);
  }

  deleteTimeline(id: number): Observable<Timeline> {
    return this.http.delete<Timeline>(`${this.url}/${id}`);
  }
}
