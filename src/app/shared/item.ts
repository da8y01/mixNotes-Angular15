import { Comment } from './comment';

export class Item {
    _id: string = '';
    name: string = '';
    image: string = '';
    category: string = '';
    label: string = '';
    price: string = '';
    featured: boolean = false;
    description: string = '';
    comments!: Comment[];
}
