import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'add-user',
    templateUrl: 'add.component.html',
    styleUrls: []
})
export class AddCompoenent {

    public disabled:boolean=true;
    //public isHidden: boolean = true;
    user: User = new User();
    constructor(private _userService: UserService) {
    }
    ngOnInit() {
      // this.user.id = 1;
    }
    addInfo() {
        this._userService.addInfo(this.user);
        this.user = null;
        this.user = new User();
       //this.user.id = this.user.id ++;
        //console.log(this.user.id);
    }
}