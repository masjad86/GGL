import { BookingStatus } from '../../enums';
import { EventTiming } from '../enums';
import { EventType } from '../enums/event-type.enum';
import { Base } from './base.model';

export interface Event extends Base<string> {
    date: Date;
    status: BookingStatus;
    statusLabel: string;
    type: EventType;
    info?: IEventInfo;
}

export interface IEventInfo {
    eventTiming: EventTiming;
    eventTimingLabel: string;
}

export interface WeddingEventInfo extends IEventInfo {
    groomName?: string;
    brideName?: string;
    groomPhoto?: string;
    bridePhoto?: string;
}

export interface CommonEventInfo extends IEventInfo {
    personName?: string;
    personPhoto?: string;
}