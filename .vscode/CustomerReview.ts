import { Review } from './Review';
import { User } from './User';

export class CustomerReview extends Review {
    constructor(
        id: number,
        author: User,
        text: string,
        rate: number,
        public customer: User
    ) {
        super(id, author, text, rate);
    }
}
