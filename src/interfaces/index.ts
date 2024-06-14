import { User } from "../core/domain/User";
import { PropertyType } from "../core/domain/PropertyType";

export interface IUserRepository {
  save(user: User): Promise<User>;

  fetchById(id: number): Promise<User>;
  fetchByEmail(email: string): Promise<User>;
}

export interface IPropertyRepository {
  save(data: PropertyType): Promise<PropertyType>;
  delete(id: number): Promise<void>;
}

export interface IPropertyTypeRepository {
  save(data: PropertyType): Promise<PropertyType>;
  delete(id: number): Promise<void>;
}
