import express from 'express'

const app = express()

app.get('/', (req,resp) => resp.send('Hello World'));


app.listen(3000,() => console.log('Application Listening on port 3000'))