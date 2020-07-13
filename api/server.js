require('dotenv').config();
import express  from 'express';
import morgan  from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes';

const app = express();

app.set('port', process.env.PORT || process.env.PORT_APP);

app.use(cors({ origin: process.env.DES_URL_FRONT }));
console.log(process.env.DES_URL_FRONT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', router);


async function init() {
    await app.listen(app.get('port'));
    console.log('Servidor en el puerto:' + app.get('port'));
}

init();