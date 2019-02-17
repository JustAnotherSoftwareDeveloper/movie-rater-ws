import { UserController } from './controllers/user-controller';
import { CategoryController } from './controllers/category-controller';
import "reflect-metadata";
import express from 'express'
import * as bodyParaser from  "body-parser";
import { createConnection } from 'typeorm';
import { useExpressServer } from "routing-controllers";
import { MovieControler } from './controllers/movie-controller';
import { RatingController } from './controllers/rating-controller';

createConnection().then(async connection => {
    const app = express();
    app.use(bodyParaser.json());


    useExpressServer(app, {
        controllers: [CategoryController,MovieControler,RatingController,UserController]
    })


    app.listen(3000);
    console.log('Application is started on port 3000')
}).catch(err => console.error(err))