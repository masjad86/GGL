import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BellNotification, BookingNotification, NotificationType } from '../../../models';
import { BellNotificationType } from '../../../enums';
import { NgClass, NgIf } from '@angular/common';
import { BookingNotificationComponent } from './booking-notification/booking-notification.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'ggl-bell-notification',
    standalone: true,
    imports: [
        NgClass,
        NgIf,

        MatIconModule,
        BookingNotificationComponent
    ],
    templateUrl: './bell-notification.component.html',
    styleUrls: ['./bell-notification.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BellNotificationComponent implements OnInit {
    @Input() public show: boolean = true;
    @Input() public items: Array<BellNotification> = [];
    @Input() public type: BellNotificationType = BellNotificationType.Booking;
    public notificationItems: Array<BookingNotification> = [];

    public isEmpty: boolean = false;
    public OTHERS = BellNotificationType.Other;
    public BOOKING = BellNotificationType.Booking;

    constructor() { }

    public ngOnInit(): void {
        const item = (this.items || []).find(x => x.notificationType === this.type);
        this.notificationItems = !item ? [] : item.items;

        this.isEmpty = this.notificationItems.length === 0;
    }

}
