import express from "express"; 
import { PORT, mongoDBURL } from "./config.js"; 
import mongoose from 'mongoose';
import { Article } from './models/articleModel.js'
import articlesRoute from './routes/articlesRoute.js'
import cors from 'cors'

const app = express();

// Parsing request body
app.use(express.json());

app.use(cors());
// middleware for CORS POLICY
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )ZZ


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('welcome to MERN stack');
});

app.use('/articles', articlesRoute)
  
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => { 
            console.log(`App is listening to port: ${PORT}`);
        }); 
    })
    .catch((error) => {
        console.log(error);
    })