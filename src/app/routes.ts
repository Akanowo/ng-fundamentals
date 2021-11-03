import { Routes } from '@angular/router';
import {
  EventsComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivate,
  EventsListResolve,
  CreateSessionComponent
} from './events/index';
import { Error404Component } from './errors/404.component';


export const appRoutes: Routes = [
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsComponent, resolve: {events: EventsListResolve} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivate] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './users/user.module#UserModule' }
];
