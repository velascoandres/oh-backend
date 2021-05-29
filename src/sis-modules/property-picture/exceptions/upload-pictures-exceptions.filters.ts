import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateOneException, FindOneException } from '@nest-excalibur/common-api/lib/api/api-principal/exceptions/crud-exception.filter';

@Catch()
export class UploadPicturesExceptionsFilters implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = exception.message;

    console.log(exception);

    if (exception instanceof FindOneException) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Error on validate the publicationId and propertyId';
    }
    if (exception instanceof CreateOneException) {
      message = 'Error on saving the uploaded pictures';
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
