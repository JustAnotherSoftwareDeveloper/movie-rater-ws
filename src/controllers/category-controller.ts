
import { CategoryEntity } from './../entity/category-entity';
import { getRepository, Repository } from 'typeorm';
import {JsonController, Get, Body, Post, Put} from 'routing-controllers';
@JsonController()
export class CategoryController {
    
    private repository = getRepository(CategoryEntity);


    @Get("/categories")
    getAll() {
        return this.repository.find();
    }


    @Post("/category")
    add(@Body() category: CategoryEntity) {
        return this.repository.insert(category);
    }

    @Put("/category")
    edit(@Body() category: CategoryEntity) {
        return this.repository.save(category);
    }
}