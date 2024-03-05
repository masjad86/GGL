import { BookingStatus } from "../enums";
import { EventType } from "../shared";

export interface BookingCalenderItem {
    name: string;
    date: Date;
    status: BookingStatus;
    type: EventType,
}