import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { EntityManager } from 'typeorm';
import { AppEntityManager } from '../../../data-source';

@ValidatorConstraint({ name: 'IsUniqueConstraint', async: true })
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(
    private readonly entityManager: EntityManager = AppEntityManager,
  ) {}
  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    // catch options from decorator
    const { tableName, column }: IsUniqeInterface = args.constraints[0];

    // database query check data is exists
    const dataExist = await this.entityManager
      .getRepository(tableName)
      .createQueryBuilder(tableName)
      .where({ [column]: value })
      .getExists();

    return !dataExist;
  }

  defaultMessage(validationArguments: ValidationArguments): string {
    // return custom field message
    const field: string = validationArguments.property;
    return `'${field}' is already used`;
  }
}

// decorator options interface
export type IsUniqeInterface = {
  tableName: string;
  column: string;
};

// decorator function
export function IsUnique(
  options: IsUniqeInterface,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isUnique',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options],
      validator: IsUniqueConstraint,
    });
  };
}
