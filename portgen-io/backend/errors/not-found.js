import CustomError from "./custom-api";
import { StatusCodes } from "http-status-codes";

class NotFoundError extends CustomError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}

module.exports = NotFoundError;