import { StatusCodes as Status } from 'http-status-codes';
class AppError extends Error {
    constructor(message, statusCode) {
        super();
        this._message = message;
        this._statusCode = statusCode !== null && statusCode !== void 0 ? statusCode : Status.BAD_REQUEST;
    }
    getMessage() {
        return this._message;
    }
    getStatusCode() {
        return this._statusCode;
    }
}
export { AppError, Status };
