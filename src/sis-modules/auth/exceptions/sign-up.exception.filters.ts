import { CreateOneException } from '@nest-excalibur/common-api/lib/api/api-principal/exceptions/crud-exception.filter';
import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class SignUpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        let status = 500;
        let message = 'Server error';

        if (exception instanceof CreateOneException) {
            status = 500;
            message = 'Error on create the user profile';
            // errorInfo code: 'auth/email-already-exists',
        } else if ((exception as any)?.errorInfo?.code === 'auth/email-already-exists') {
            status = 400;
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