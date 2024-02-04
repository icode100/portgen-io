import CustomError from "./custom-api";
import { StatusCodes } from "http-status-codes";

class UnauthenticatedError extends CustomError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthenticatedError;