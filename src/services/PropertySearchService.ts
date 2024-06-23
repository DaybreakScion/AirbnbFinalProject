import { Address } from "../core/domain/Address";
import { Property, PropertyCategory } from "../core/domain/Property";
import { PropertyType } from "../core/domain/PropertyType";
import { IPropertyRepository } from "../interfaces";

export interface SearchParameters {
    category?: PropertyCategory;
    type?: PropertyType;
    destination?: Partial<Address>;
    from?: Date;
    to?: Date;
    adults?: number;
    children?: number;
    infant?: number;
    pet?: number;
}

export class PropertySearchService {

    constructor(
        private readonly propertyRepository: IPropertyRepository
    ) { }

    async search(params: SearchParameters, pageIndex: number, itemsPerPage: number): Promise<Property[]> {
        const hasSearchParams = Object.values(params).filter(Boolean).length > 0;
        
        if (hasSearchParams) {
            return this.propertyRepository.search(params, pageIndex, itemsPerPage);
        } else {
            return this.propertyRepository.searchTrending(pageIndex, itemsPerPage);
        }
    }
}