import {
  propArray,
  propObject,
  required,
  disable,
  prop,
} from '@rxweb/reactive-form-validators';
import { Address } from './address';
import { Hobby } from './hobby';
export class User {
  @required()
  fullName: string =null 

  @required()
  address: Adress = null;

  @required()
  hobbies: Array<Hobby> = null;

    public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
