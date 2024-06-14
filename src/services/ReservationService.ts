import { Property } from "../core/domain/Property";
import { Reservation } from '../core/domain/Reservation';
import { User } from "../core/domain/User";

export class ReservationService {



    checkReservation(peroperty: Property, fromDate: Date, toDate: Date): boolean {
      throw new Error('Method not implemented.');
    }

    requestReservation(user: User, property: Property, fromDate: Date, toDate: Date): Promise<Reservation> {
      throw new Error('Method not implemented.');
    }

    acceptReservation(reservation: Reservation): Promise<Reservation> {
      throw new Error('Method not implemented.');
    }

    rejectReservation(reservation: Reservation): Promise<Reservation> {
      throw new Error('Method not implemented.');
    }

    cancelReservation(reservation: Reservation): Promise<Reservation> {
      throw new Error('Method not implemented.');
    }

    checkIn(user: User, reservation: Reservation): Promise<Reservation> {
      throw new Error('Method not implemented.');
    }

    checkOut(reservation: Reservation): Promise<Reservation> {
      throw new Error('Method not implemented.');
    }
}
