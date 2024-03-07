import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

import { GlobalHeaderService, LayoutService } from '../../services';
import { BellNotification } from '../../models';
import { BellNotificationType } from '../../enums';
import { Router } from '@angular/router';
import { ADMIN_URL } from '../../constants';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

export const ENTER_BUTTON = 13;

@Component({
    selector: 'ggl-global-header',
    standalone: true,
    imports: [
        NgClass,
        NgIf,

        MatIconModule,
        MatInputModule,
        FormsModule
    ],
    templateUrl: './global-header.component.html',
    styleUrls: ['./global-header.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GlobalHeaderComponent implements OnInit, AfterViewInit, DoCheck {
    public title = 'Home';
    public username = 'Admin User';
    public avatarImage: string = '';
    public searchBookingNumber: string = '';
    public showBellNotification: boolean = false;
    public showMessageNotification: boolean = false;
    public showSearch: boolean = false;
    public showProgressBar: boolean = false;
    public notifications: Array<BellNotification> = [];
    public messages: Array<BellNotification> = [];
    public isMenuBarExpanded: boolean = false;

    public OTHERS = BellNotificationType.Other;
    public BOOKING = BellNotificationType.Booking;

    constructor(
        private globalHeaderService: GlobalHeaderService,
        private cdr: ChangeDetectorRef,
        private router: Router,
        private layout: LayoutService) { }

    ngDoCheck(): void {
        this.isMenuBarExpanded = this.layout.isMenuBarExpanded;
        this.cdr.detectChanges();
    }

    ngAfterViewInit(): void {
        this.title = this.globalHeaderService.title;
        this.cdr.detectChanges();
    }

    public ngOnInit(): void {
        this.isMenuBarExpanded = this.layout.isMenuBarExpanded;
        this.cdr.detectChanges();
    }

    public toggleNotification() {
        this.showBellNotification = !this.showBellNotification;
        this.showSearch = false;
        this.showMessageNotification = false;
        this.cdr.detectChanges();
    }

    public toggleMessageNotification() {
        this.showMessageNotification = !this.showMessageNotification;
        this.showSearch = false;
        this.showBellNotification = false;
        this.cdr.detectChanges();
    }

    public toggleSearch() {
        this.showSearch = !this.showSearch;
        this.showMessageNotification = false;
        this.showBellNotification = false;
        this.cdr.detectChanges();
    }

    public searchBookings(event?: any) {
        if (!event) {
            this.router.navigate([ADMIN_URL.BOOKING_DETAIL, this.searchBookingNumber]);
            return;
        }

        if (event.keyCode === ENTER_BUTTON) {
            event.preventDefault();
            this.router.navigate([ADMIN_URL.BOOKING_DETAIL, event.target.value]);
        }
    }

    public hideSearch() {
        this.showSearch = false;
        this.cdr.detectChanges();
    }

    public hideNotifications() {
        this.showBellNotification = false;
        this.cdr.detectChanges();
    }

    public hideMessages() {
        this.showMessageNotification = false;
        this.cdr.detectChanges();
    }
}
