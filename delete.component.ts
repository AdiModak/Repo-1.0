import { Component } from "@angular/core";
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-delete',
    templateUrl: 'delete.component.html',
    styles: []
})
export class DeleteComponentClass {


    user: User;
    userList: User[] = new Array<User>();

    constructor(private _userService: UserService) { }

    ngOnInit() {
        /*this._userService.addInfo(this.user);
        alert(this.user);*/
        this.userList = this._userService.deleteUserInfo();

    }
    deleteName(user:User) {
       
        
        //this.userList.splice(this.user.id);
        //this.userList.pop();
        //console.log(this.userList);
        // let n=this.user.id;
        let newValue = this.userList.indexOf(user);
        this.userList.splice(newValue,1);
       console.log(this.userList);
        localStorage.removeItem('names');
        //console.log('Index is :' + this.userList.findIndex);
        //this.userList.indexOf;
        // alert(this.userList.length);
    }
}
