import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddCompoenent } from './header/add.component';
import {ListComponent } from './header/list.component';
import { UserService } from './user.service';
import { DeleteComponentClass } from './header/delete.component';
import { DisplayListComponent } from './header/displayList.component';
import { EditComponent } from './header/edit.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCompoenent,
    ListComponent,
    DeleteComponentClass,
    DisplayListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
