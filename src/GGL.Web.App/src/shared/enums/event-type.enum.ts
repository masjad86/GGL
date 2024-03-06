import { IEnumDescription } from "../models/enum-description.model";

export enum EventType {
    NONE = 0,    
	WEDDING_CEREMONY = 1,
	BIRTHDAY_PARTY,
	ENGAGEMENT,
	RECEPTION,
	FAMILY_FUNCTION,
	PROMOTION,
	KITTY_PARTY,
	CORPORATE_PARTY,
	OTHER
}

export const EventTypeDescription: IEnumDescription = {
    [EventType.NONE]: "",
    [EventType.BIRTHDAY_PARTY]: "Birthday",
    [EventType.CORPORATE_PARTY]: "Corporate Party",
    [EventType.ENGAGEMENT]: "Engagement",
    [EventType.FAMILY_FUNCTION]: "Family Function",
    [EventType.KITTY_PARTY]: "Kitty Party",
    [EventType.OTHER]: "Other",
    [EventType.PROMOTION]: "Promotion",
    [EventType.RECEPTION]: "Reception",
    [EventType.WEDDING_CEREMONY]: "Wedding",
}