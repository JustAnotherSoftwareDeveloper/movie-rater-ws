# Movie Rater Web Service

This is a web service that stores movie ratings by categories for users. It is meant to be used in conjunction with the [movie rater web](https://github.com/JustAnotherSoftwareDeveloper/movie-rater-web) project. It is hard-coded to port 3000. I would obviously not do this on a production application


# Technologies Used

 - NodeJS - NodeJS (specifically the ts-node variant) was used for this project. I chose node because the of the quick time to develop an application. In my opinion, the biggest downside of nodeJS is efficiency. That isn't an issue for the operations I was doing
 - Typescript - I feel the advantages of typescript cannot be understated. The type safety alone leads to a considerable amount of less bugs than vanillaJS. Additionally, the annotation system allows some pretty cool stuff that wouldn't be nearly as easy otherwise
 - TypeOrm - I found [this](http://typeorm.io/#/) framework that is a typed ORM for javascript. While I have mixed feelings about both ORMs and random javascript libraries in production, I was delighted to play with it for a side project. The framework acts a lot like hibernate, and allowed me to write my backend in a very short amount of time. 
 - Sqlite - In memory databases are awesome for these types of projects, and Sqlite is Ol' Faithful in this regard.
 - Express - Anyone that has used node is at least aware of express for routing. While I have always wanted to try RESTeasy as an alternative, I chose to stick with what I already knew
 - Routing-Controllers - I found this framework that uses typescript annotations to allow multiple routing files that feed into express. I usually work in Java, so those annotations felt great to me. 
## To Install
Run 
    npm ci
This will download files according to my package-lock.json 
At that point you can run either of the two commands:

    npm run start
    npm run serve
The first will launch ts-node, while the second will launch a similar runtime that will watch for file changes.
## Disclaimer

This was a small project I finished in a weekend. It is missing a lot of stuff I would consider essential in a production level application. This includes:

 - ANY TESTING
 - Authentication
 - Any sort of analytics


### If you have any questions, feel free to contact me
