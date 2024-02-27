import { Injectable } from '@angular/core';
import { Event, EventType } from '../shared';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    nextEventDate?: Date = undefined;
    nextEventType?: EventType = undefined;
    constructor() {

    }

    getCurrentEvent() {
        return <Event>{};
    }

    getUpcomingEvent(): Observable<Event> {
        return of(<Event>{});
    }
}
