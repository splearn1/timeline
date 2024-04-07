import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Timeline } from '../models/timeline';
import { TimelineService } from '../services/timeline.service';
import { User } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  timelines: Timeline[] = [];
  newTimelineBody: string = '';
  users: User[] = [];
  currentUser: User | null = null;

  constructor(private timelineService: TimelineService, private userService:UserService) { }

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe((user) => {
      this.currentUser = user;
    });

      this.timelineService.getTimelines().subscribe({
        next: (users) => {
          this.users = users;
          console.log(this.users)
        },
        error: err => console.log(err)
      })
  }

  // addTimeline() {
  //   if (!this.newTimelineBody.trim()){
  //     // referene timeline model for what I want to display
  //   return;
  //   }


  //   const timeline = {
  //     body: this.newTimelineBody,
  //     is_completed: false
  //   };

  //   this.timelineService.createTimeline(timeline).subscribe(newtimeline => {
  //   this.timelines.push(newtimeline);
  //   this.newTimelineBody = '';
  //   });
  // }

  // updateTimeline(timeline: Timeline) {
  //   this.timelineService.updateTimeline(timeline).subscribe(updatedtimeline => {
  //     const index = this.timelines.findIndex(t => t.id === updatedtimeline.id);
  //     this.timelines[index] = updatedtimeline;
  //   });
  // }

  // deleteTimeline(id: number) {
  //   this.timelineService.deleteTimeline(id).subscribe({
  //     next: () => this.timelines = this.timelines.filter(timeline => timeline.id !==id),
  //     error: (err) => console.error(err)
  //   });
  // }
}
