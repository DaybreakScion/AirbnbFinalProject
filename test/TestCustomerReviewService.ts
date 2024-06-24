import { DataSource } from '../src/infrastructure/Database';
import { CustomerReviewRepository } from '../src/infrastructure/CustomerReviewRepository';
import { CustomerReviewService } from '../src/services/CustomerReviewService';
import { CustomerReview } from '../src/core/domain/CustomerReview';
import { User } from '../src/core/domain/User';

const dataSource = DataSource.instance;
const customerReviewRepository = new CustomerReviewRepository(dataSource);
const customerReviewService = new CustomerReviewService(customerReviewRepository);

const customer = new User({ id: 1, email: 'customer@example.com', password: 'password', firstName: 'Customer', lastName: 'Name' });
const reviewer = new User({ id: 2, email: 'reviewer@example.com', password: 'password', firstName: 'Reviewer', lastName: 'Name' });

dataSource.users.save(customer);

const review = new CustomerReview(1, reviewer, 'Great customer!', 5, customer);

async function testCustomerReviewService() {
  const createdReview = await customerReviewService.createReview(review);
  console.log('Review created:', createdReview);

  const fetchedReview = await customerReviewService.getReviewById(1);
  console.log('Review fetched:', fetchedReview);

  const reviewsForCustomer = await customerReviewService.getAllReviewsForCustomer(1);
  console.log('Reviews for customer:', reviewsForCustomer);

  await customerReviewService.deleteReview(1);
  console.log('Review deleted');
}

testCustomerReviewService();
