
import { Request, Response } from "express";

export const AppRoutes := [
    {
        
    }
]

interface AppRoute {
    path: string;
    method: 'get' | 'post' | 'put' | 'delete',
    action: OrmFunction
}

interface OrmFunction {
    (request: Request, response: Response) : void;
}