import { User } from "../core/domain/User";
import { Property } from "../core/domain/Property";
import { IPropertyRepository } from "../interfaces";

export class PropertyService {
  constructor(private readonly propertyRepository: IPropertyRepository) {}

  getProperty(id: number): Promise<Property> {
    throw new Error("Method not implemented.");
  }

  listForUser(user: User): Promise<Property[]> {
    throw new Error("Method not implemented.");
  }

  createProperty(user: User, property: Partial<Property>): Promise<Property> {
    throw new Error("Method not implemented.");
  }

  updateProperty(user: User, property: Partial<Property>): Promise<Property> {
    throw new Error("Method not implemented.");
  }

  deleteProperty(user: User, id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
