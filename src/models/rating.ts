import { Category } from './category';
import { Movie } from './movie';
import { UserInfo } from './user-info';
export interface Rating {
    user: UserInfo;
    movie: Movie
    category: Category;
}