import { Component, OnInit } from '@angular/core';
import { plainToClass } from 'class-transformer';
import {UserRepoService} from '../user-repo.service'


import { RxFormBuilder, RxFormGroup } from '@rxweb/reactive-form-validators';
import { userJson } from '../../assets/user-data';
import { User } from '../models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  user: User;
  userForm: RxFormGroup;

  constructor(private formBuilder: RxFormBuilder,private repo:UserRepoService) {
    this.user = plainToClass(User, userJson);
    this.userForm = this.formBuilder.formGroup(this.user) as RxFormGroup;
  }

  ngOnInit(): void {
  }

  updateHobbies() {
    this.user = plainToClass(User, userJson);
    this.userForm = this.formBuilder.formGroup(this.user) as RxFormGroup;
  }
  submitForm():void{
    this.repo.addUser(this.userForm.value)
  }
}