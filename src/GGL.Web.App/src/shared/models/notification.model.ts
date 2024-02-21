import { BookingStatusType, BellNotificationType } from '../enums';

export class BellNotification {
	public id: number;
	public url?: string;
	public notificationType: BellNotificationType;
	public items: Array<BookingNotification | any>; 

    constructor() {
        this.id = -1;
        this.notificationType = BellNotificationType.Booking;
        this.items = [];
    }
}


export class BookingNotification {
	public id: number;
	public title: string;
	public contact?: string;
	public status?: BookingStatusType;
	public timestamp: Date;
	public url?: string;

    constructor() {
        this.id = -1;
        this.title = '';
        this.timestamp = new Date();
    }
}
