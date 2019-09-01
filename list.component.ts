import { Component } from "@angular/core";
import { BuiltinType, ArrayType } from '@angular/compiler';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styles: []
})
export class ListComponent {

  user: User=new User();
  userArray: User[];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.userArray = this._userService.getUserInfo();
  }
  updateInfo() {
    console.log(this.user);
  }
}   