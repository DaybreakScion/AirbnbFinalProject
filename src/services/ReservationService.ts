import { Property } from "../core/domain/Property";
import { Reservation, ReservationStatus } from "../core/domain/Reservation";
import { User } from "../core/domain/User";
import { IReservationRepository, IPropertyRepository } from "../interfaces";

export class ReservationService {
  constructor(
    private readonly reservationRepository: IReservationRepository,
    private readonly propertyRepository: IPropertyRepository
  ) {}

  checkReservation(property: Property, fromDate: Date, toDate: Date): boolean {
    throw new Error("Method not implemented.");
  }

  async requestReservation(user: User, property: Property, fromDate: Date, toDate: Date): Promise<Reservation> {
    if (user.hasPet && !property.isPetFriendly) {
      throw new Error("Property does not allow pets.");
    }
    
    const reservation = new Reservation({
      id: 0, // Assume ID is auto-generated
      user: user,
      property: property,
      status: ReservationStatus.PENDING,
      from: fromDate,
      to: toDate
    });
    return this.reservationRepository.save(reservation);
  }

  async acceptReservation(reservation: Reservation): Promise<Reservation> {
    reservation.status = ReservationStatus.ACCEPTED;
    return this.reservationRepository.save(reservation);
  }

  async rejectReservation(reservation: Reservation): Promise<Reservation> {
    reservation.status = ReservationStatus.REJECTED;
    return this.reservationRepository.save(reservation);
  }

  async cancelReservation(reservation: Reservation): Promise<Reservation> {
    reservation.status = ReservationStatus.CANCELED;
    return this.reservationRepository.save(reservation);
  }

  async checkIn(user: User, reservation: Reservation): Promise<Reservation> {
    if (reservation.user.id !== user.id) {
      throw new Error('User not authorized for check-in.');
    }
    reservation.status = ReservationStatus.CHECKED_IN;
    return this.reservationRepository.save(reservation);
  }

  async checkOut(reservation: Reservation): Promise<Reservation> {
    reservation.status = ReservationStatus.CHECKED_OUT;
    return this.reservationRepository.save(reservation);
  }
}
