import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BookingEnquiry } from '../../../models/booking';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { BOOK_NOW_URL } from '../../../constants/route.constants';
import { URL } from 'url';

export const BOOKING_ENQUIRY_AVAILABITLITY_MSG = "Checking Date For Marriage Or Other Celebrations?";
export const BOOKING_ENQUIRY_CHECKDATES_MSG = "Please fill up the form to notify you that you're looking for the booking date. Thanks.";

export const BOOKING_ENQUIRY_OTP_SENT_MSG = "Your booking enquiry OTP sent on your mobile number successfully.";
export const BOOKING_ENQUIRY_OTP_FILL_MSG = "Please enter your OTP to sent your booking enquiry to Green Garden Lawn team.";

export const BOOKING_ENQUIRY_SENT_MSG = "Your booking enquiry request has been sent successfully.";
export const BOOKING_ENQUIRY_SENT_REVIEW_MSG = "Green Garden Lawn team will review your request and will be shortly contact you for more details.";

@Component({
    selector: 'ggl-getting-started',
    standalone: true,
    imports: [
        FormsModule,

        NgIf
    ],
    templateUrl: './getting-started.component.html',
    styleUrl: './getting-started.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingStartedComponent {
    enquiry: BookingEnquiry = new BookingEnquiry();
    bookingOtp?: number;
    showBookingOtp: boolean = false;
    showRequestSent: boolean = false;

    availablityMessage: string = BOOKING_ENQUIRY_AVAILABITLITY_MSG;
    availablityDetailMessage: string = BOOKING_ENQUIRY_CHECKDATES_MSG;

    otpMessage: string = BOOKING_ENQUIRY_OTP_SENT_MSG;
    otpFillMessage: string = BOOKING_ENQUIRY_OTP_FILL_MSG;

    requestSentMessage: string = BOOKING_ENQUIRY_SENT_MSG;
    requestSentReviewMessage: string = BOOKING_ENQUIRY_SENT_REVIEW_MSG;

    constructor(private changeDetectorRef: ChangeDetectorRef,
        private router: Router) {

    }

    sentEnquiry() {
        if (this.enquiry) {
            // this.api.sentEnquiry(this.enquiry);
            this.showBookingOtp = true;
            this.changeDetectorRef.detectChanges();
        }
    }

    confirmEnquiry() {
        this.showRequestSent = true;
        this.showBookingOtp = false;
        this.changeDetectorRef.detectChanges();
    }

    cancelEnquiry() {
        this.reset();
    }

    newEnquiry() {
        this.reset();
    }

    checkAvailability() {
        this.router.navigate([BOOK_NOW_URL]);
    }

    private reset() {
        this.showRequestSent = false;
        this.showBookingOtp = false;
        this.enquiry = new BookingEnquiry();
        this.changeDetectorRef.detectChanges();
    }
}
