export enum BookingStatus {
    HOLD = 1,
    PENDING,
    CONFIRMED,
    CANCELLED,
    NOTBOOKED
}

export const BookingStatusLabel = {
    [BookingStatus.HOLD]: 'Hold',
    [BookingStatus.PENDING]: 'Pending',
    [BookingStatus.CONFIRMED]: 'Confirmed',
    [BookingStatus.CANCELLED]: 'Cancelled',
    [BookingStatus.NOTBOOKED]: 'Available'
}
