import { Database } from '../infrastructure/Database';
import { ReservationService } from '../core/services/ReservationService';

export class AppConfig {
    static database = new Database();
    static reservationService = new ReservationService();
}
