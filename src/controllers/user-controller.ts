
import { UserEntity } from './../entity/user-entity';
import { getRepository } from "typeorm";
import { JsonController, Get, Post, Body, Delete, Param, Put } from 'routing-controllers';


@JsonController()
export class UserController {
    private repository = getRepository(UserEntity)

    @Get("/users")
    getAll() {
        return this.repository.find();
    }

    @Get("/users/:id")
    getByUserId(@Param("id") id: number) {
        
    }

    @Post("/user")
    add(@Body() user: UserEntity) {
        return this.repository.insert(user);
    }
    

    @Put("/user")
    edit(@Body() user: UserEntity) {
        return this.repository.save(user);
    }
    
    @Delete("/user/:id")
    deleteEntry(@Param("id") id: number) {    
        return this.repository.delete(id);
    }
}