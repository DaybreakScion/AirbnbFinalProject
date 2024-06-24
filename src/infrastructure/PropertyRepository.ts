import { SearchParameters } from "../services/PropertySearchService";
import { Property } from "../core/domain/Property";
import { IPropertyRepository } from "../interfaces";
import { PropertyType } from "../core/domain/PropertyType";
import { DataSource } from "./Database";

export class PropertyRepository implements IPropertyRepository {
  constructor(private readonly dataSource: DataSource) {}

  fetch(id: number): Promise<Property> {
    throw new Error("Method not implemented.");
  }

  save(data: PropertyType): Promise<Property> {
    throw new Error("Method not implemented.");
  }

  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  searchTrending(pageIndex: number, itemsPerPage: number): Promise<Property[]> {
    return this.dataSource.properties.find((property) => property.isTrending);
  }

  async search(params: SearchParameters, pageIndex: number, itemsPerPage: number): Promise<Property[]> {
    return this.dataSource.properties.find((property) => {
      if (params.category) {
        return property.category === params.category;
      }
      if (params.type) {
        return property.type === params.type;
      }
      if (params.destination) {
        return property.address.city === params.destination.city;
      }
      if (params.from && params.to) {
        return property.bookings.some(booking => {
          return booking.from >= params.from && booking.to <= params.to;
        });
      }
      if (params.adults) {
        return property.capacity.adults >= params.adults;
      }
      if (params.children) {
        return property.capacity.children >= params.children;
      }
      if (params.infant) {
        return property.capacity.infant >= params.infant;
      }
      if (params.pet) {
        return property.capacity.pet >= params.pet;
      }
    });
  }
}
