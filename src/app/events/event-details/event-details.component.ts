import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
   'img {height: 100px}',
   'a { cursor: pointer }'
  ]
})

export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';
  showLevelButtons = true;

  constructor(private eventService: EventService, private router: ActivatedRoute) { }

  addSession() {
    this.addMode = true;
    this.showLevelButtons = false;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelNewSession() {
    this.addMode = false;
    this.showLevelButtons = true;
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.event = this.eventService.getEvent(
      +this.router.snapshot.params.id
    );
  }
}
