import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Hobby} from '../models/hobby'

import { FormArray, FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-hobby-form',
  templateUrl: './hobby-form.component.html',
  styleUrls: ['./hobby-form.component.css']
})
export class HobbyFormComponent implements OnInit {
  @Input() userForm: FormGroup;
  @Output() updateHobbies = new EventEmitter();
  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }


  constructor(
    private formBuilder: RxFormBuilder,
  ) { }

  ngOnInit(): void {
  }
  addHobby() {
    this.hobbies.push(this.formBuilder.formGroup(Hobby));

  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  submitForm() {
    console.log(this.userForm.value);
    this.updateHobbies.emit();
  }
}
