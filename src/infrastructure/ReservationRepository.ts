import { Reservation } from '../core/domain/Reservation';
import { IReservationRepository } from '../interfaces';
import { DataSource } from './Database';

export class ReservationRepository implements IReservationRepository {
  constructor(private readonly dataSource: DataSource) {}

  async save(reservation: Reservation): Promise<Reservation> {
    return this.dataSource.reservations.save(reservation);
  }

  async findById(id: number): Promise<Reservation | null> {
    return this.dataSource.reservations.getById(id);
  }

  async delete(id: number): Promise<void> {
    return this.dataSource.reservations.delete(id);
  }
}
