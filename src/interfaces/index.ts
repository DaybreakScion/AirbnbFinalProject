import { User } from "../core/domain/User";
import { PropertyType } from "../core/domain/PropertyType";
import { SearchParameters } from "../services/PropertySearchService";
import { Inbox, ChatHistory } from "../core/domain/Inbox";
import { Property } from "../core/domain/Property";
import { Reservation } from "../core/domain/Reservation";
import { PropertyReview } from "../core/domain/PropertyReview";
import { CustomerReview } from "../core/domain/CustomerReview";

export interface IUserRepository {
  save(user: User): Promise<User>;
  fetchById(id: number): Promise<User>;
  fetchByEmail(email: string): Promise<User>;
}

export interface IPropertyRepository {
  fetch(id: number): Promise<Property>;
  save(data: PropertyType): Promise<Property>;
  delete(id: number): Promise<void>;
  search(
    params: SearchParameters,
    pageIndex: number,
    itemsPerPage: number
  ): Promise<Property[]>;
  searchTrending(pageIndex: number, itemsPerPage: number): Promise<Property[]>;
}

export interface IPropertyTypeRepository {
  save(data: PropertyType): Promise<PropertyType>;
  delete(id: number): Promise<void>;
}

export interface IInboxRepository {
  findById(id: number): Promise<Inbox | null>;
  findByUserIds(userId: number, recipientId: number): Promise<Inbox | null>;
  save(inbox: Inbox): Promise<Inbox>;
  delete(id: number): Promise<void>;
  addMessage(inboxId: number, message: ChatHistory): Promise<Inbox>;
  findOrCreateInbox(userId: number, recipientId: number): Promise<Inbox>;
}

export interface IReservationRepository {
  save(reservation: Reservation): Promise<Reservation>;
  findById(id: number): Promise<Reservation | null>;
  delete(id: number): Promise<void>;
}

export interface IPropertyReviewRepository {
  save(review: PropertyReview): Promise<PropertyReview>;
  findById(id: number): Promise<PropertyReview | null>;
  delete(id: number): Promise<void>;
  findAllByPropertyId(propertyId: number): Promise<PropertyReview[]>;
}

export interface ICustomerReviewRepository {
  save(review: CustomerReview): Promise<CustomerReview>;
  findById(id: number): Promise<CustomerReview | null>;
  delete(id: number): Promise<void>;
  findAllByCustomerId(customerId: number): Promise<CustomerReview[]>;
}
