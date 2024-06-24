import { PropertyType } from './PropertyType';
import { User } from './User';
import { Address } from './Address';

export enum PropertyCategory {
  ownhouse,
  apartment
}

export class Property {
  public id: number;
  public category: PropertyCategory;
  public type: PropertyType;
  public owner: User;
  public address: Address;
  public description: string;
  public price: number;
  public accommodation: number;
  public isPetFriendly: boolean;
  public isTrending: boolean;
  public bookings: Array<{ from: Date; to: Date }>;
  public capacity: {
    adults: number;
    children: number;
    infant: number;
    pet: number;
  };

  constructor(rawData?: Partial<Property>) {
    Object.assign(this, rawData);
    if (rawData?.owner) {
      this.owner = new User(rawData.owner);
    }

    if (rawData?.address) {
      this.address = new Address(rawData.address);
    }

    if (rawData?.type) {
      this.type = new PropertyType(rawData.type);
    }
  }
}
