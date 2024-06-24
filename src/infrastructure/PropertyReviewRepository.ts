import { PropertyReview } from "../core/domain/PropertyReview";
import { IPropertyReviewRepository } from "../interfaces";
import { DataSource } from "./Database";

export class PropertyReviewRepository implements IPropertyReviewRepository {
  constructor(private readonly dataSource: DataSource) {}

  save(review: PropertyReview): Promise<PropertyReview> {
    return this.dataSource.propertyReviews.save(review);
  }

  findById(id: number): Promise<PropertyReview | null> {
    return this.dataSource.propertyReviews.getById(id);
  }

  delete(id: number): Promise<void> {
    return this.dataSource.propertyReviews.delete(id);
  }

  findAllByPropertyId(propertyId: number): Promise<PropertyReview[]> {
    return this.dataSource.propertyReviews.find((review: PropertyReview) => review.property.id === propertyId);
  }
}
