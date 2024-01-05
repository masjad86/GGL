import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { GlobalHeaderService } from '../../services';
import { BellNotification } from '../../models';
import { BellNotificationType } from '../../enums';
import { Router } from '@angular/router';
import { CLIENT_URL } from '../../constants';

export const ENTER_BUTTON = 13;

@Component({
	selector: 'ggl-global-header',
	templateUrl: './global-header.component.html',
	styleUrls: ['./global-header.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalHeaderComponent implements OnInit {
	public title = 'Home';
	public username = 'Admin User';
	public avatarImage: string;
	public searchBookingNumber: string;
	public showBellNotification: boolean;
	public showMessageNotification: boolean;
	public showSearch: boolean;
	public notifications: Array<BellNotification>;
	public messages: Array<BellNotification>;

	public OTHERS = BellNotificationType.Other;
	public BOOKING = BellNotificationType.Booking;

	constructor(
		private globalHeaderService: GlobalHeaderService,
		private changeDetectorRef: ChangeDetectorRef,
		private router: Router) { }

	public ngOnInit(): void {
		this.title = this.globalHeaderService.title;
	}

	public toggleNotification() {
		this.showBellNotification = !this.showBellNotification;
		this.showSearch = false;
		this.showMessageNotification = false;
		this.changeDetectorRef.detectChanges();
	}

	public toggleMessageNotification() {
		this.showMessageNotification = !this.showMessageNotification;
		this.showSearch = false;
		this.showBellNotification = false;
		this.changeDetectorRef.detectChanges();
	}

	public toggleSearch() {
		this.showSearch = !this.showSearch;
		this.showMessageNotification = false;
		this.showBellNotification = false;
		this.changeDetectorRef.detectChanges();
	}

	public searchBookings(event?: any) {
		if (!event) {
			this.router.navigate([CLIENT_URL.BOOKING_DETAIL, this.searchBookingNumber]);
			return;
		}

		if (event.keyCode === ENTER_BUTTON) {
			event.preventDefault();
			this.router.navigate([CLIENT_URL.BOOKING_DETAIL, event.target.value]);
		}
	}

	public hideSearch() {
		this.showSearch = false;
		this.changeDetectorRef.detectChanges();
	}

	public hideNotifications() {
		this.showBellNotification = false;
		this.changeDetectorRef.detectChanges();
	}

	public hideMessages() {
		this.showMessageNotification = false;
		this.changeDetectorRef.detectChanges();
	}
}
