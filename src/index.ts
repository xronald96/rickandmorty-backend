import express from 'express';
import { headers } from './headers';
import dotenv from 'dotenv';
import routes from './routes/index';

dotenv.config();
const app = express();
const PORT = 8080;
app.use(express.json());

app.all('/*', headers);

app.use(routes)
app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log('Running on port: ', PORT);
});
