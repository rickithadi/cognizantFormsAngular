import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  // TODO passsed address controls dont fit formgroup type
  // https://github.com/angular/angular-cli/issues/6099
  @Input() addressForm: any;

  constructor() { }

  ngOnInit(): void {
  }

}
