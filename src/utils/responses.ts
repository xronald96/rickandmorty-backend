import { ErrorResponse, SuccessResponse } from "../types/Responses";
import { UserEntity } from "../types/UserEntity";

export const CreateSuccessResponse = (status: number, response: UserEntity): SuccessResponse => {
    return {
        status,
        response
    };
}

export const CreateErrorResponse = (status: number, message: string, error?:unknown): ErrorResponse => {
    return {
        status,
        error: {
            message,
            error
        }
    };
}