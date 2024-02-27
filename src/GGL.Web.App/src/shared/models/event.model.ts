import { EventType } from '../enums/event-type.enum';
import { Base } from './base.model';

export interface Event extends Base<number> {
    date: Date;
    type: EventType;
}
