import {
  propArray,
  propObject,
  required,
  alpha,
} from '@rxweb/reactive-form-validators';
import { Address } from './address';
import { Hobby } from './hobby';

import { Type } from 'class-transformer';
export class User {
  @required()
  @alpha()
  fullName: string|null =null;

  @propObject()
  @Type(() => Address)
  address: Address|null = null;

  @propArray()
  @Type(() => Hobby)
  hobbies: Array<Hobby>|null = null;

    public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
