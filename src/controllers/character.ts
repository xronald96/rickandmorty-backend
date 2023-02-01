import axios from 'axios';
import { RESPONSE_ERROR_MESSAGE } from '../utils/constants';
import { CreateErrorResponse, CreateSuccessResponse } from '../utils/responses';

const BASE_URL = 'https://rickandmortyapi.com/api/character';
const getCharacters = async (page: string) => {
	try {
		const uri = page ? BASE_URL + `/?page=${page}` : BASE_URL;
		const result = await axios.get(uri).then((res) => res.data);
		return CreateSuccessResponse(200, result);
	} catch (err) {
		return CreateErrorResponse(500, RESPONSE_ERROR_MESSAGE.INTERNAL_ERROR, err);
	}
};

const getCharacter = async (id: string) => {
	try {
		if (!id) return CreateErrorResponse(400, RESPONSE_ERROR_MESSAGE.INPUTS_REQUIRED);
		const result = await axios.get(`${BASE_URL}/${id}`).then((res) => res.data);
		return CreateSuccessResponse(200, result);
	} catch (err) {
		return CreateErrorResponse(500, RESPONSE_ERROR_MESSAGE.INTERNAL_ERROR, err);
	}
};

export { getCharacters, getCharacter };
