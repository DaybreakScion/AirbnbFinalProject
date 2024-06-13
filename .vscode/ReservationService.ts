import { Reservation } from '../entities/Reservation';

export class ReservationService {
    private reservations: Reservation[] = [];

    addReservation(reservation: Reservation) {
        this.reservations.push(reservation);
    }

    getReservations(): Reservation[] {
        return this.reservations;
    }
}
