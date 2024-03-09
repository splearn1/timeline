import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Timeline } from '../models/timeline';
import { TimelineService } from '../services/timeline.service';

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

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {
      this.timelineService.getTimelines().subscribe(timelines => this.timelines = timelines)
  }

  addTimeline() {
    if (!this.newTimelineBody.trim()){
    // this.timelineService.createTimeline({ body: this.newTimelineBody, is_completed: false }).subscribe(timeline => this.timelines.push(timeline));
    // this.newTimelineBody = '';
    return;
    }


    const timeline = {
      body: this.newTimelineBody,
      is_completed: false
    };

    this.timelineService.createTimeline(timeline).subscribe(newtimeline => {
    this.timelines.push(newtimeline);
    this.newTimelineBody = '';
    });
  }

  updateTimeline(timeline: Timeline) {
    this.timelineService.updateTimeline(timeline).subscribe(updatedtimeline => {
      const index = this.timelines.findIndex(t => t.id === updatedtimeline.id);
      this.timelines[index] = updatedtimeline;
    });
  }

  deleteTimeline(id: number) {
    this.timelineService.deleteTimeline(id).subscribe({
      next: () => this.timelines = this.timelines.filter(timeline => timeline.id !==id),
      error: (err) => console.error(err)
    });
  }
}
