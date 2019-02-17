
import { getRepository, FindManyOptions } from 'typeorm';
import { RatingEntity } from '../entity/rating-entity';
import { JsonController, Get, Put, Post, Body, Delete, Param } from 'routing-controllers';
import deepClone from 'deep-clone';
@JsonController()
export class RatingController {
    private repository = getRepository(RatingEntity);

    private readonly typeOptions = {
       relations: ["user","movie","category"]
    };
    @Get("/ratings")
    getAll() {
        return this.repository.find(this.typeOptions);
    }

    @Get("/ratings/:id")
    getRatingsForUser(@Param("id") id: number) {
        const options: FindManyOptions = deepClone(this.typeOptions);
        options.where = {user: {
            userId : id
        }};
        return this.repository.find(options);
    }

    @Post("/rating")
    add(@Body() rating: RatingEntity) {
        return this.repository.insert(rating);
    }

    @Put("/rating")
    edit(@Body() rating: RatingEntity) {
        return this.repository.save(rating);
    }

    @Delete("/rating/:id")
    delete(@Param("id") id: number) {
        return this.repository.delete(id);
    }

}