import { unique, required, prop } from '@rxweb/reactive-form-validators';
import { AbstractControl } from '@angular/forms';
export class Hobby {
  @unique()
  name: string = null;

  public constructor(init?: Partial<Hobby>) {
    Object.assign(this, init);
  }
}