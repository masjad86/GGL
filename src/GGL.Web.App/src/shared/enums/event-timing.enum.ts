import { IEnumDescription } from "../models/enum-description.model";

export enum EventTiming {
    Morning,
    Afternoon,
    Evening
}

export const EventTimingDescription: IEnumDescription = {
    [EventTiming.Morning]: "Morning",
    [EventTiming.Afternoon]: "Afternoon",
    [EventTiming.Evening]: "Night",
};