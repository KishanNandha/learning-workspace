import { ErrorHandler } from "@angular/core";

export class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An unexpexted error occurred.')
        console.log(error);
    }
}