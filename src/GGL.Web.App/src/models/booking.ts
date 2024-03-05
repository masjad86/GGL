export class BookingEnquiry {
    name: string;
    email?: string;
    mobileNumber: string;
    date: Date;

    constructor() {
        this.name = "";
        this.email = "";
        this.mobileNumber= "";
        this.date = new Date();
    }
}