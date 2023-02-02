import axios from 'axios';
import { RESPONSE_ERROR_MESSAGE } from '../utils/constants';
import { CreateErrorResponse, CreateSuccessResponse } from '../utils/responses';

const BASE_URL = 'https://rickandmortyapi.com/api/location';
const getLocations = async (params: any) => {
	try {
		const uri = BASE_URL + new URLSearchParams(params).toString();
		const result = await axios.get(uri).then((res) => res.data);
		return CreateSuccessResponse(200, result);
	} catch (err) {
		return CreateErrorResponse(500, RESPONSE_ERROR_MESSAGE.INTERNAL_ERROR, err);
	}
};

const getLocation = async (id: string) => {
	try {
		if (!id) return CreateErrorResponse(400, RESPONSE_ERROR_MESSAGE.INPUTS_REQUIRED);
		const result = await axios.get(`${BASE_URL}/${id}`).then((res) => res.data);
		return CreateSuccessResponse(200, result);
	} catch (err) {
		return CreateErrorResponse(500, RESPONSE_ERROR_MESSAGE.INTERNAL_ERROR, err);
	}
};

export { getLocations, getLocation };
