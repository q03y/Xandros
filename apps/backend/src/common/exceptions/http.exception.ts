import { HttpException, HttpStatus } from '@nestjs/common';

export class AppException extends HttpException {
  constructor(message: string, statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR) {
    super(
      {
        status: statusCode,
        message,
        timestamp: new Date().toISOString(),
      },
      statusCode,
    );
  }
}
