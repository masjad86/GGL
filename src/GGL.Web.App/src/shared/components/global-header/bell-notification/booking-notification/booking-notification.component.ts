import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BookingNotification } from '../../../../models';
import { DatePipe, LowerCasePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { BookingStatusType } from '../../../../enums';

@Component({
    selector: 'ggl-booking-notification',
    standalone: true,
    imports: [
        NgIf,
        NgFor,

        LowerCasePipe,
        UpperCasePipe,
        DatePipe
    ],
    templateUrl: './booking-notification.component.html',
    styleUrls: ['./booking-notification.component.css',
        '../bell-notification.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookingNotificationComponent implements OnInit {
    @Input() public bookings: Array<BookingNotification> = [];
    constructor() { }

    public ngOnInit(): void {
    }

    public getStatus(statusType?: BookingStatusType) {
        switch (statusType) {
            case BookingStatusType.Confirmed:
                return "confirmed";
            case BookingStatusType.Cancelled:
                return "cancelled";
            case BookingStatusType.Hold:
                return "hold";
            case BookingStatusType.Pending:
                return "pending";
            default:
                return "waiting";
        }
    }
}
