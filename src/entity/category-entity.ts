
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class CategoryEntity {

    @PrimaryGeneratedColumn()
    categoryId: number

    @Column({nullable: false})
    categoryName: string;
}