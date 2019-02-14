import { Response } from 'express-serve-static-core';
import { Repository } from "typeorm";
import { Request } from "express";

export interface Controller {
    
    getAll: ormFunction;

    addOrEdit: ormFunction;
}

interface ormFunction {
    (request: Request, response: Response) : void;
}