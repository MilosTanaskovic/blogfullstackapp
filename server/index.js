import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 
import blogPostRoutes from './routes/blog-post.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

// routes
app.use('/milos-blog', blogPostRoutes);
// connect with db -> connection string('mongodb+srv://blogfullstackapp:blogfullstackapp12345678@cluster0.9ozd2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const CONNECTION_STRING = 'mongodb+srv://blogfullstackapp:blogfullstackapp12345678@cluster0.9ozd2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_STRING)
    .then(() => app.listen(PORT, () => console.log(`Server is running: ${PORT}`)))
    .catch(error => console.log(error.message));