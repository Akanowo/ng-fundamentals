// tslint:disable: component-selector
import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from './shared/events.model';

@Component({
    selector: 'event-thumbnail',
    template:  `
    <div class="well hoverwell thumbnail">
      <div>Name: {{event?.name | uppercase}}</div>
      <div>Date: {{event?.date | date:'shortDate'}}</div>
      <div [ngStyle] = "getEarlyStyle()">Time:
      <span>{{event?.time}}</span>
      <span>&nbsp;(Early Start)</span>
      </div>
      <div>Price: {{event?.price | currency:'USD'}}</div>
    <div *ngIf = "event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span>&nbsp;</span>
      <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf = "event?.onlineUrl">
      <span>Online Url: {{event?.onlineUrl}}</span>
    </div>
    </div>
    `,
    styles: [`
      .thumbnail {min-height: 210px},
      .pad-left { margin-left: 10px; }
      .well div {color: #bbb}
    `
    ]
})

export class EventThumbnailComponent implements OnInit {
    @Input() event: IEvent;
    constructor() { }
    getEarlyStyle() {
        if (this.event && this.event.time === '8:00 am') {
          return { color: '#003300', 'font-weight': 'bold' };
        }
        return {};
    }
    ngOnInit(): void {
    }
}
