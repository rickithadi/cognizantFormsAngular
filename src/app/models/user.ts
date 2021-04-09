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
  fullName: string

  @propObject(Address)
  @Type(() => Address)
  address: Address

  @propArray()
  @Type(() => Hobby)
  hobbies: Array<Hobby>

    public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
