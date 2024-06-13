import { PropertyType } from './PropertyType';
import { User } from './User';
import { Address } from './Address';

export class Property {
    constructor(
        public id: number,
        public type: PropertyType,
        public owner: User,
        public address: Address,
        public description: string,
        public price: number,
        public accommodation: number
    ) {}
}
