import { connect } from 'mongoose';
import { LOCAL_URI_DB } from '../utils/constsnts';

export const initDb = async () => {
	try {
		await connect(process.env.URI_MONGODB || LOCAL_URI_DB);
		// eslint-disable-next-line no-console
		console.log('Database connected');
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log('error');
	}
};
