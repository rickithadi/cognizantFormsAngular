import { AbstractControl } from "@angular/forms";
import { disable, prop, required } from "@rxweb/reactive-form-validators";
export class Address {
  @required()
  areaName: string = null;
  @required()
  cityName: string = null;
  @required()
  countryName: string = null;



 public constructor(init?: Partial<Address>) {
    Object.assign(this, init);
  }
}
