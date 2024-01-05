import { Component, OnInit, Input } from '@angular/core';
import { BookingNotification } from '../../../../models';

@Component({
	selector: 'ggl-booking-notification',
	templateUrl: './booking-notification.component.html',
	styleUrls: ['./booking-notification.component.css',
		'../bell-notification.component.scss']
})
export class BookingNotificationComponent implements OnInit {
	@Input() public items: Array<BookingNotification>;
	constructor() { }

	public ngOnInit(): void {
	}

}
