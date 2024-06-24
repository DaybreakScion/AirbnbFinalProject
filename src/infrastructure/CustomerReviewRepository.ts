import { CustomerReview } from "../core/domain/CustomerReview";
import { ICustomerReviewRepository } from "../interfaces";
import { DataSource } from "./Database";

export class CustomerReviewRepository implements ICustomerReviewRepository {
  constructor(private readonly dataSource: DataSource) {}

  save(review: CustomerReview): Promise<CustomerReview> {
    return this.dataSource.customerReviews.save(review);
  }

  findById(id: number): Promise<CustomerReview | null> {
    return this.dataSource.customerReviews.getById(id);
  }

  delete(id: number): Promise<void> {
    return this.dataSource.customerReviews.delete(id);
  }

  findAllByCustomerId(customerId: number): Promise<CustomerReview[]> {
    return this.dataSource.customerReviews.find((review: CustomerReview) => review.customer.id === customerId);
  }
}
