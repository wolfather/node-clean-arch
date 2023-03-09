import { HttpResponseAdapter } from "../../presentation/adapter/httpadapter.interface"

export enum ERROR_NUM {
    SERVER = 500,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INVALID_CREDENTIALS = 400,
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 203,
}

export enum ERROR_MESSAGE {
    SERVER = 'Server error',
    BAD_REQUEST = 'No data',
    NOT_FOUND = 'Not found',
    INVALID_CREDENTIALS = 'Invalid Credentials',
    OK = 'ok',
    CREATED = 'Created successfuly',
    NO_CONTENT = 'No content',
}

export enum ERROR_CODE {
    SERVER = 'SERVER',
    BAD_REQUEST = 'BAD_REQUEST',
    NOT_FOUND = 'NOT_FOUND',
    INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
    OK = 'OK',
    CREATED = 'CREATED',
    NO_CONTENT = 'NO_CONTENT',
}

export const errorResponseFactory = (code = ERROR_CODE.NO_CONTENT, data?: any): Partial<HttpResponseAdapter<any>> => {
    // const defaultBody = {
    //     statusCode: ERROR_NUM[code]
    // };
    
    return {
        statusCode: ERROR_NUM[code],
        message: ERROR_MESSAGE[code]
    };
}