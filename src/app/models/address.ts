import { AbstractControl } from "@angular/forms";
import { disable, prop, required } from "@rxweb/reactive-form-validators";
export class Address {
  @required()
  areaName: string |null= null;

  @required()
  cityName: string |null= null;

  @required()
  countryName: string |null= null;



 public constructor(init?: Partial<Address>) {
    Object.assign(this, init);
  }
}
