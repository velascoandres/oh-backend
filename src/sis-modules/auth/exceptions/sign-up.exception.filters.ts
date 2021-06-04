import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus,
} from '@nestjs/common';

import { CreateOneException } from '@nest-excalibur/common-api/lib/api/api-principal/exceptions/crud-exception.filter';
import { Request, Response } from 'express';

@Catch()
export class SignUpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Server error';

        if (exception instanceof CreateOneException) {
            message = 'Error on create the user profile';
        } else if ((exception as any)?.errorInfo?.code === 'auth/email-already-exists') {
            status = HttpStatus.BAD_REQUEST;
            message = 'User exists';
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