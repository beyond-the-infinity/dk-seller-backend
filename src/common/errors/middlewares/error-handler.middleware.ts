import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../http.error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    // If the headers are already sent, delegate to the default Express error handler
    return next(err);
  }

  if (err instanceof HttpError) {
    res.status(err.status).json({
      error: {
        message: err.message,
        more: err.more,
      },
    });
  } else {
    res.status(500).json({
      error: {
        message: 'Internal Server Error',
      },
    });
  }
};
