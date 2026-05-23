import { MyError } from './myError';
export class MyBadRequestError extends MyError {
    status = 400;
    constructor(error) {
        super(error);

    }
} 