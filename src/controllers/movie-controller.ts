
import { MovieEntity } from './../entity/movie-entity';
import { getRepository, Repository } from "typeorm";
import { JsonController, Get, Post, Put, Body } from 'routing-controllers';

@JsonController()
export class MovieControler {
    private repository = getRepository(MovieEntity);

    @Get("/movies")
    getAll() {
        return this.repository.find()
    }

    @Post("/movie")
    add(@Body() movie: MovieEntity) {
        return this.repository.insert(movie);
    }

    @Put("/movie")
    edit(@Body() movie: MovieEntity) {
        return this.repository.save(movie);
    }
    

    
}