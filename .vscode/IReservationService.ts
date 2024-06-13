import { Reservation } from '../core/entities/Reservation';

export interface IReservationService {
    addReservation(reservation: Reservation): void;
    getReservations(): Reservation[];
}
