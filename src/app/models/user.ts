import {
  propArray,
  propObject,
  required,
  alpha,
  disable,
  prop,
} from '@rxweb/reactive-form-validators';
import { Address } from './address';
import { Hobby } from './hobby';
export class User {
  @required()
  @alpha()
  fullName: string|null =null

  @propObject()
  @required()
  address: Address|null = null;

  @propArray()
  @required()
  hobbies: Array<Hobby>|null = null;

    public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
