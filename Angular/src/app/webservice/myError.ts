export class MyError {
    timeStamp;
    constructor(public originalError?: any) {
        this.timeStamp = new Date();
    }
}