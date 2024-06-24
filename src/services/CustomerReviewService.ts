import { CustomerReview } from "../core/domain/CustomerReview";
import { ICustomerReviewRepository } from "../interfaces";

export class CustomerReviewService {
  constructor(private readonly customerReviewRepository: ICustomerReviewRepository) {}

  async createReview(review: CustomerReview): Promise<CustomerReview> {
    return this.customerReviewRepository.save(review);
  }

  async getReviewById(id: number): Promise<CustomerReview | null> {
    return this.customerReviewRepository.findById(id);
  }

  async deleteReview(id: number): Promise<void> {
    return this.customerReviewRepository.delete(id);
  }

  async getAllReviewsForCustomer(customerId: number): Promise<CustomerReview[]> {
    return this.customerReviewRepository.findAllByCustomerId(customerId);
  }
}
