
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class MovieEntity {

    @PrimaryGeneratedColumn()
    movieId: number

    @Column({nullable: false})
    movieName: string;
}