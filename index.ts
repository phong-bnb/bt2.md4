import express from 'express';

import bodyParser from 'body-parser';

import mongoose from 'mongoose';

import bookRoutes from './src/router/book.router';

const PORT = 3000;

const app = express();
app.use('/book', bookRoutes);
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.set('views', './src/views');

const DB_URL = 'mongodb+srv://ngphong0708:vJdmPagODEqQLGaX@cluster0.ilmi62h.mongodb.net/';

mongoose.connect(DB_URL)

  .then(() => console.log('DB Connected!'))

  .catch((error) => console.log('DB connection error:', error.message));



app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
