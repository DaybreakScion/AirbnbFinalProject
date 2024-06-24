// test/TestPropertyReviewService.ts
import { DataSource } from '../src/infrastructure/Database';
import { PropertyReviewRepository } from '../src/infrastructure/PropertyReviewRepository';
import { PropertyReviewService } from '../src/services/PropertyReviewService';
import { PropertyReview } from '../src/core/domain/PropertyReview';
import { Property } from '../src/core/domain/Property';
import { PropertyType } from '../src/core/domain/PropertyType';
import { PropertyCategory } from '../src/core/domain/Property';
import { User } from '../src/core/domain/User';

// Initialize the data source and repositories
const dataSource = DataSource.instance;
const propertyReviewRepository = new PropertyReviewRepository(dataSource);
const propertyReviewService = new PropertyReviewService(propertyReviewRepository);

// Create an example property (The White House)
const whiteHouse = new Property({
  id: 1,
  category: PropertyCategory.ownhouse,
  type: new PropertyType({ id: 1, name: 'Historic' }),
  owner: new User({ id: 1, email: 'owner@example.com', password: 'password', firstName: 'Owner', lastName: 'Name' }),
  address: { street1: '1600 Pennsylvania Avenue NW', street2: '', city: 'Washington', zipCode: '20500', country: 'USA' },
  description: 'The White House',
  price: 1000,
  accommodation: 15,
  isPetFriendly: false,
  isTrending: true,
});

// Add the property to the data source
dataSource.properties.save(whiteHouse);

// Create a test review
const review = new PropertyReview(1, new User({ id: 2, email: 'reviewer@example.com', password: 'password', firstName: 'Reviewer', lastName: 'Name' }), 'Great place!', 5, whiteHouse);

// Test the review service
async function testPropertyReviewService() {
  // Create a review
  const createdReview = await propertyReviewService.createReview(review);
  console.log('Review created:', createdReview);

  // Get the review by ID
  const fetchedReview = await propertyReviewService.getReviewById(1);
  console.log('Review fetched:', fetchedReview);

  // Get all reviews for the property
  const reviewsForProperty = await propertyReviewService.getAllReviewsForProperty(1);
  console.log('Reviews for property:', reviewsForProperty);

  // Delete the review
  await propertyReviewService.deleteReview(1);
  console.log('Review deleted');
}

// Run the tests
testPropertyReviewService();
