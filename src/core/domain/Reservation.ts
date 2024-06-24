import { Property } from "./Property";
import { User } from "./User";

export enum ReservationStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  CANCELED = "CANCELED",
  CHECKED_IN = "CHECKED_IN",
  CHECKED_OUT = "CHECKED_OUT",
}

export class Reservation {
  public id: number;
  public user: User;
  public property: Property;
  public status: ReservationStatus;
  public from: Date;
  public to: Date;

  constructor(rawData?: Partial<Reservation>) {
    Object.assign(this, rawData);
  }
}
