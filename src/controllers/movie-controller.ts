import { Controller } from './controller-interface';
import { Request, Response } from 'express';
import { MovieEntity } from './../entity/movie-entity';
import { getRepository, Repository } from "typeorm";

export class MovieControler implements Controller {
    private repository = getRepository(MovieEntity);

    async getAll(request: Request, response : Response) {
        const movies = await this.repository.find()
        response.send(movies);
    }

    async addOrEdit(request: Request, response: Response) {
        const movie = await this.repository.save(request.body);
    }
}