import { connect } from 'mongoose';

export const initDb = async () => {
	try {
		await connect(process.env.URI_MONGODB || '');
		// eslint-disable-next-line no-console
		console.log('Database connected');
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log('error');
	}
};
