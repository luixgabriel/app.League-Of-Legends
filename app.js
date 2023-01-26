import express, { Router } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
// import router from './routes';

import HomeController from './controllers/HomeController';

const router = new Router();

const app = express();
// app.use(cors);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(router);

router.get('/', HomeController.index);
router.post('/player', HomeController.playerData);

const port = process.env.PORT;

app.listen(port || 4000, () => {
  console.log('Servidor rodando');
});
