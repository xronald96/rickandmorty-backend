import { connect } from 'mongoose';
// import { LOCAL_URI_DB } from '../utils/constants';

export const initDb = async () => {
	try {
		const uri_mongo = process.env.NODE_ENV === 'dev' ? process.env.URI_MONGODB_DEV : process.env.URI_MONGODB_DEV;
		await connect(uri_mongo);
		// eslint-disable-next-line no-console
		console.log('Database connected');
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log('Database connetion error: ', error);
	}
};
