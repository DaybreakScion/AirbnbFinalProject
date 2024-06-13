import { User } from './User';
import { Property } from './Property';

export class Reservation {
  constructor(
    public id: number,
    public user: User,
    public property: Property,
    public from: Date,
    public to: Date
  ) {}
}
