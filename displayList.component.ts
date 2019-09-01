import {Component, Output, Input} from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector:'app-list-display',
    templateUrl:'displayList.component.html',
    styles:[]
})
export class DisplayListComponent{
@Output() public list=['Item1','Item2'];
@Input() public parentData;

constructor(private _userService:UserService){}

ngOnInit(){

}
}