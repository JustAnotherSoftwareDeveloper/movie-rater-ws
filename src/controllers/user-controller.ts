import { Controller } from './controller-interface';
import { UserEntity } from './../entity/user-entity';
import { getRepository } from "typeorm";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import { NextFunction } from "connect";

export class UserController implements Controller {

    private repository = getRepository(UserEntity)

    async getAll(request: Request, response: Response) {
        const users : UserEntity[] = await this.repository.find();
        response.send(users);
    }

    async addOrEdit(request: Request, response: Response) {
        const user : UserEntity = await this.repository.save(request.body);
        response.send(user);
    }
}