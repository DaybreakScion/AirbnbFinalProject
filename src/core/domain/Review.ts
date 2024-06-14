import { User } from './User';

export class Review {
    constructor(
        public id: number,
        public author: User,
        public text: string,
        public rate: number
    ) {}
}
