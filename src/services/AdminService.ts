import { PropertyType } from "../core/domain/PropertyType";
import { IPropertyTypeRepository } from "../interfaces";

export class AdminService {

  constructor(
    private readonly propertyTypeRepository: IPropertyTypeRepository
  ) {}

  createPropertyType(name: string): Promise<PropertyType> {
    throw new Error('Method not implemented.');
  }

  deletePropertyType(name: string): Promise<PropertyType> {
    throw new Error('Method not implemented.');
  }
}
