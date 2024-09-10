import { ErrorBody } from './types';

export class HttpError extends Error {
  more: any;

  constructor(public status: number, public body: ErrorBody) {
    super(body.message);
    this.more = body.more;
    this.name = this.constructor.name;
  }
}
