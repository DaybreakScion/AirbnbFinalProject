import { User } from "../core/domain/User";
import { PropertyType } from "../core/domain/PropertyType";
import { SearchParameters } from "../services/PropertySearchService";
import { Inbox } from '../core/domain/Inbox';
import { Property } from "../core/domain/Property";

export interface IUserRepository {
  save(user: User): Promise<User>;

  fetchById(id: number): Promise<User>;
  fetchByEmail(email: string): Promise<User>;
}

export interface IPropertyRepository {
  fetch(id: number): Promise<Property>;
  save(data: PropertyType): Promise<Property>;
  delete(id: number): Promise<void>;

  search(params: SearchParameters, pageIndex: number, itemsPerPage: number): Promise<Property[]>;
  searchTrending(pageIndex: number, itemsPerPage: number): Promise<Property[]>;
}

export interface IPropertyTypeRepository {
  save(data: PropertyType): Promise<PropertyType>;
  delete(id: number): Promise<void>;
}

export interface IInboxRepository {
  findById(id: number): Promise<Inbox | null>;
  save(inbox: Inbox): Promise<Inbox>;
  delete(id: number): Promise<void>;
}