import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction } from 'express';
import { HttpError } from '../../errors/http.error';

export function validationMiddleware<T>(dtoClass: new () => T) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = plainToInstance(dtoClass, req.body); // Convert plain request body to DTO instance

    const errors = await validate(dtoObject as object); // Validate the DTO instance

    if (errors.length > 0) {
      // Transform validation errors into a more readable format
      const validationErrors = errors.map((error: ValidationError) => ({
        field: error.property,
        errors: Object.values(error.constraints || {}),
      }));

      // Throw an HttpError with the validation error details
      return next(
        new HttpError(400, {
          message: 'Validation failed',
          more: validationErrors,
        }),
      );
    }

    // If validation passed, continue to the next middleware/route
    next();
  };
}
