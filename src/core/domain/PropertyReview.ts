import { Review } from './Review';
import { User } from './User';
import { Property } from './Property';

export class PropertyReview extends Review {
    constructor(
        id: number,
        author: User,
        text: string,
        rate: number,
        public property: Property
    ) {
        super(id, author, text, rate);
    }
}
