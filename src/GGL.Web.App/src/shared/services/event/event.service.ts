import { Injectable } from '@angular/core';
import { EventTiming, EventType } from '../../enums';
import { Event, IEventInfo, WeddingEventInfo } from '../../models';
import { Observable, of } from 'rxjs';
import { BookingStatus } from '../../../enums';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    constructor() { }

    public getCurrentEvent(): Observable<Event> {
        const eventInfo: IEventInfo = {
            groomPhoto: "young-man-smiling.jpg",
            groomName: "Rahul Kumar",
            bridePhoto: "young-woman-smiling.jpg",
            brideName: "Swati Sharma"
        } as WeddingEventInfo;

        const event: Event = {
            id: "1",
            name: "Wedding",
            type: EventType.WEDDING_CEREMONY,
            date: new Date(),
            info: eventInfo,
            status: BookingStatus.CONFIRMED,
            statusLabel: "Booked"
        };

        return of(event);
    }

    public getUpcomingEvent(): Observable<Event> {
        const today = new Date();
        const eventInfo: IEventInfo = {
            groomPhoto: "young-man-smiling.jpg",
            groomName: "Rahul Kumar",
            bridePhoto: "young-woman-smiling.jpg",
            brideName: "Swati Sharma",
            eventTiming: EventTiming.Evening
        } as WeddingEventInfo;

        const event: Event = {
            id: "2",
            name: "Wedding",
            type: EventType.WEDDING_CEREMONY,
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
            info: eventInfo,
            status: BookingStatus.CONFIRMED,
            statusLabel: "Booked"
        };

        return of(event);
    }
}
