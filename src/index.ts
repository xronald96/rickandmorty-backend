import express from 'express';
import { headers } from './headers';
import dotenv from 'dotenv';
import routes from './routes/index';
import { initDb } from './database/database';
dotenv.config();
initDb();
const app = express();
const PORT = 8000;
app.use(express.json());

app.all('/*', headers);

app.use(routes);
const server = app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log('Running on port: ', PORT);
});

export {
	app, server
}