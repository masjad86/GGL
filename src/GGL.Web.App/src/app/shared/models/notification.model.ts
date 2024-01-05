import { BookingStatusType, BellNotificationType } from '../enums';

export class BellNotification {
	public id: number;
	public url?: string;
	public notificationType: BellNotificationType;
	public items: Array<BookingNotification | any>; 
}


export class BookingNotification {
	public id: number;
	public title: string;
	public contact?: string;
	public status?: BookingStatusType;
	public timestamp: Date;
	public url?: string;
}
