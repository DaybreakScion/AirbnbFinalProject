import { Reservation } from '../core/entities/Reservation';

export class Database {
    private reservations: Reservation[] = [];

    saveReservation(reservation: Reservation) {
        this.reservations.push(reservation);
    }

    fetchReservations(): Reservation[] {
        return this.reservations;
    }
}
