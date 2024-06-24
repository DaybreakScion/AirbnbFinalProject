import { PropertyReview } from "../core/domain/PropertyReview";
import { IPropertyReviewRepository } from "../interfaces";

export class PropertyReviewService {
  constructor(private readonly propertyReviewRepository: IPropertyReviewRepository) {}

  async createReview(review: PropertyReview): Promise<PropertyReview> {
    return this.propertyReviewRepository.save(review);
  }

  async getReviewById(id: number): Promise<PropertyReview | null> {
    return this.propertyReviewRepository.findById(id);
  }

  async deleteReview(id: number): Promise<void> {
    return this.propertyReviewRepository.delete(id);
  }

  async getAllReviewsForProperty(propertyId: number): Promise<PropertyReview[]> {
    return this.propertyReviewRepository.findAllByPropertyId(propertyId);
  }
}
