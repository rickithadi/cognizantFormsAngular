import { Injectable } from '@angular/core';
import {User} from './models/user'
@Injectable({
  providedIn: 'root'
})
export class UserRepoService {
  users:User[]=[]

  constructor() { }
  addUser(user:User):void{
    this.users.push(user)
    console.log('user list is now',this.users)

  }
}
