import { Dish } from './dish';
import { Item } from './item';
import { User } from './user';

export class Favorite {
    _id: string = '';
    user!: User;
    // dishes!: Dish[];
    items!: Item[];
    createdAt: string = '';
    updatedAt: string = '';
}
