import { Category } from './category';
import { Movie } from './movie';
import { UserInfo } from './user-info';
export interface Rating {
    user: UserInfo;
    movie: Movie
    category: Category;
    score: 0 | 1 | 2 | 3 | 4 | 5
}