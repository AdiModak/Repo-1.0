import { Component } from "@angular/core";
import { User } from '../user';
import { UserService } from '../user.service';
import { NgForOf } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';

@Component({
    selector: 'app-edit',
    templateUrl: 'edit.component.html',
    styles: []
})
export class EditComponent {

    newValue: User[] = new Array<User>();
    user: User = new User();
    userArray: User[] = new Array<User>();
    constructor(private _userService: UserService) {
    }
    ngOnInit() {
        this.userArray = this._userService.getUserInfo();
    }

    updateInfo(abc: User) {
        // this.userArray.findIndex();
        //return this.userArray;
        //this.userArray.push(id);
        //console.log(this.userArray[0].firstName);
        //console.log(this.userArray);
        this.userArray.forEach(function (value) {
            if (value.id == abc.id) {
                value.firstName = abc.firstName;
                value.lastName = abc.lastName;
                value.contact = abc.contact;
                value.address = abc.address;
            }
        });


        /* this.userArray.forEach(function(value) {
             console.log(value.id); 
             console.log(value.firstName);
             if (this.userArray.id == abc.id) {
                this.userArray.firstName = this.abc.firstName;
             }
         });*/
        //this._userService.updateInfo(this.user);
        //console.log('New details :'+this.user)*/
        //  this.userArray=this._userService.updateInfo(this.user);
    }

}