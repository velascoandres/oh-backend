import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    BadRequestException,
    HttpStatus,
} from '@nestjs/common';

import {
    FindAllException,
    UpdateOneException,
    CreateOneException,
} from '@nest-excalibur/common-api/lib/api/api-principal/exceptions/crud-exception.filter';
import { Request, Response } from 'express';

@Catch()
export class SignInExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Server error';

        if (exception instanceof BadRequestException) {
            message = 'User email does not exist';
            status = exception.getStatus();
        } else if (exception instanceof FindAllException) {
            status = HttpStatus.NOT_FOUND;
            message = 'Error on find user profile';
        } else if (exception instanceof CreateOneException) {
            message = 'Error on create the user profile';
        } else if (exception instanceof UpdateOneException) {
            message = 'Error on update the user profile';
        } else if (exception.toString().toLowerCase().includes('id token')) {
            status = HttpStatus.FORBIDDEN;
            message = 'Id token has expired';
        }

        response
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                message,
            });
    }
}