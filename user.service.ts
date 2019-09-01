import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArray: User[] = new Array<User>();
  newArray: User[] = new Array<User>();
  constructor() {
    //this.user=new User();
  }
  addInfo(user: User) {
    this.userArray.push(user);
    console.log(this.userArray);
    console.log(this.userArray.length);
  }
  getUserInfo() {
    return this.userArray;
    // console.log('New details :'+this.user)

  }
  deleteUserInfo() {
    return this.userArray;
  }
  updateInfo() {
    return this.userArray;
    /*this.newArray.push(user);
    console.log(this.newArray);
    console.log(this.newArray.length);*/
  }
}
