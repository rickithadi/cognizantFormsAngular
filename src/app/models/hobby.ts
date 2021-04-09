import { unique, required, prop, alpha } from '@rxweb/reactive-form-validators';
import { AbstractControl } from '@angular/forms';
export class Hobby {
  @unique()
  @alpha()
  @required()
  name: string |null= null;

  public constructor(init?: Partial<Hobby>) {
    Object.assign(this, init);
  }
}