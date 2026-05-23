import { MyError } from './myError';
export class MyNotFoundError extends MyError {
    status = 404;
    constructor(error) {
        super(error);

    }
}