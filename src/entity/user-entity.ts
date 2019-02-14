import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { RatingEntity } from "./rating-entity";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    userId: number

    @Column({nullable: false})
    username: string;

}