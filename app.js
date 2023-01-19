import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import fetch from 'node-fetch';
import router from './routes';

const app = express();
// app.use(cors);
app.use(router);

app.listen(8087, () => {
  console.log('Servidor rodando');
});
