import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/events.model';

@Component({
  selector: 'app-events',
  template:  `
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div *ngFor = "let event of events" class="col-md-5">
        <event-thumbnail #thumbnail [event] = "event" [routerLink]="[ '/events', event.id ]"></event-thumbnail>
      </div>
    </div>

  `
})
export class EventsComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.router.snapshot.data.events;
  }

}
