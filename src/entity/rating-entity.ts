import { CategoryEntity } from './category-entity';
import { MovieEntity } from './movie-entity';
import { UserEntity } from './user-entity';
import { UserInfo } from './../models/user-info';
import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";

@Entity()
export class RatingEntity {

    @PrimaryColumn()
    ratingId: number;
    
    @Column({nullable : false})
    score: number;

    @ManyToOne(type => UserEntity)
    @JoinColumn()
    user: UserInfo;

    @ManyToOne(type => MovieEntity)
    @JoinColumn()
    movie: MovieEntity;

    @ManyToOne(type => CategoryEntity)
    @JoinColumn()
    category: CategoryEntity;
}