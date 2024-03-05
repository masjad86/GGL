import { Injectable } from "@angular/core";
import { BookingEnquiry } from "../models/booking";
import { ApiService } from "../shared";
import { BOOKING_ENQUIRY_API } from "./api.routes";

@Injectable({
    providedIn: 'root'
})
export class BookingApi {
    constructor(private api: ApiService) {

    }

    public sentEnquiry(enquiry: BookingEnquiry) {
        this.api.post<boolean>(BOOKING_ENQUIRY_API, enquiry);
    }
}