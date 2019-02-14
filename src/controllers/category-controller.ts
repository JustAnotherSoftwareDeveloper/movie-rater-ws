import { Category } from './../models/category';
import { CategoryEntity } from './../entity/category-entity';
import { Controller } from './controller-interface';
import { getRepository, Repository } from 'typeorm';
import { Request, Response } from 'express';
export class CategoryController implements Controller {
    
    private repository = getRepository(CategoryEntity);


    async getAll(request: Request, response: Response) {
        const categories : Category[] = await this.repository.find();
        response.send(categories);
    }

    async addOrEdit(request: Request, response: Response) {
        const category: Category = await this.repository.save(request.body);
        response.send(category);
    }
}