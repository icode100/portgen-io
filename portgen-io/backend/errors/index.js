import BadRequestError from "./bad-request";
import NotFoundError from './not-found';
import UnauthenticatedError from './unauthenticated'
import UnauthorizedError from './unauthorized'
import CustomError from "./custom-api";

module.exports = {
    CustomError,
    BadRequestError,
    NotFoundError,
    UnauthenticatedError,
    UnauthorizedError
}