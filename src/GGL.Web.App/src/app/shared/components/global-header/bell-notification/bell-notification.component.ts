import { Component, OnInit, Input } from '@angular/core';
import { BellNotification, BookingNotification, NotificationType } from '../../../models';
import { BellNotificationType } from '../../../enums';

@Component({
	selector: 'ggl-bell-notification',
	templateUrl: './bell-notification.component.html',
	styleUrls: ['./bell-notification.component.scss']
})
export class BellNotificationComponent implements OnInit {
	@Input() public show: boolean;
	@Input() public items: Array<BellNotification>;
	@Input() public type: BellNotificationType = BellNotificationType.Booking;
	public notificationItems: Array<BookingNotification>;

	public isEmpty: boolean;
	public OTHERS = BellNotificationType.Other;
	public BOOKING = BellNotificationType.Booking;

	constructor() { }

	public ngOnInit(): void {
		const item = (this.items || []).find(x => x.notificationType === this.type);
				this.notificationItems = !item ? [] : item.items;

		this.isEmpty = this.notificationItems.length === 0;
	}

}
