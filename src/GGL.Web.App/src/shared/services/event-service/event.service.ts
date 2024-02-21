import { Injectable } from '@angular/core';
import { EventType } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    nextEventDate?:Date = undefined; 
    nextEventType?: EventType = undefined;
    constructor() { }
}
