import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BookingStatus, BookingStatusLabel, ViewMode } from '../../../enums';
import { DatePipe, LowerCasePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Event } from '../../models';
import { EventTiming, EventTimingDescription, EventType, EventTypeDescription } from '../../enums';
import moment from 'moment';
import { MatSelectModule } from '@angular/material/select';
import { EnumHelper } from '../../helpers/enum.helper';

@Component({
    selector: 'ggl-booking-calendar',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgClass,

        //Pipes
        DatePipe,
        LowerCasePipe,

        // Component

        // Module
    ],
    templateUrl: './booking-calendar.component.html',
    styleUrl: './booking-calendar.component.scss',
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingCalendarComponent implements OnInit {
    @Input('mode') viewMode: ViewMode = ViewMode.Grid;
    @Input('items') bookingEvents: Array<Event> = [];

    selectedMonth: number = 3;
    selectedYear: number = 2024;
    isListViewMode: boolean = false;

    BOOKING_STATUS_NOTBOOKED = BookingStatus.NOTBOOKED;
    BOOKING_STATUS_CANCELED = BookingStatus.CANCELLED;

    constructor(private changeDetectorRef: ChangeDetectorRef) {

    }

    ngOnInit(): void {
        this.isListViewMode = this.viewMode === ViewMode.List;
        this.loadItems();
    }

    private loadItems() {
        const date = new Date(this.selectedYear, this.selectedMonth, 1);
        const daysInMonth = moment(date).daysInMonth();
        for (let i = 1; i <= daysInMonth; i++) {
            
            if (i % 6 === 0) {
                this.bookingEvents.push({
                    id: i.toString(),
                    name: EnumHelper.GetDesciption(EventType.RECEPTION, EventTypeDescription),
                    type: EventType.RECEPTION,
                    date: new Date(this.selectedYear, this.selectedMonth, i),
                    status: BookingStatus.CONFIRMED,
                    statusLabel: BookingStatusLabel[BookingStatus.CONFIRMED],
                    info: {
                        eventTiming: EventTiming.Evening,
                        eventTimingLabel: EnumHelper.GetDesciption(EventTiming.Evening, EventTimingDescription),
                    }
                });
            }
            else if (i % 3 === 0 || i % 5 === 0) {
                this.bookingEvents.push({
                    id: i.toString(),
                    name: EnumHelper.GetDesciption(EventType.WEDDING_CEREMONY, EventTypeDescription),
                    type: EventType.WEDDING_CEREMONY,
                    date: new Date(this.selectedYear, this.selectedMonth, i),
                    status: BookingStatus.CONFIRMED,
                    statusLabel: BookingStatusLabel[BookingStatus.CONFIRMED],
                    info: {
                        eventTiming: EventTiming.Evening,
                        eventTimingLabel: EnumHelper.GetDesciption(EventTiming.Evening, EventTimingDescription),
                    }
                });
            }
            else {
                this.bookingEvents.push({
                    id: i.toString(),
                    name: '',
                    type: EventType.NONE,
                    date: new Date(this.selectedYear, this.selectedMonth, i),
                    status: BookingStatus.NOTBOOKED,
                    statusLabel: BookingStatusLabel[BookingStatus.NOTBOOKED]
                });
            }
        }

        this.changeDetectorRef.detectChanges();
    }
}
