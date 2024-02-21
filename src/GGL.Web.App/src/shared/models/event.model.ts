import { Base } from './base.model';

export interface Event extends Base<number> {
	type: EventType;
}

export enum EventType {
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
