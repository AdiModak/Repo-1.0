import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddCompoenent } from './header/add.component';
import { ListComponent } from './header/list.component';
import { DisplayListComponent } from './header/displayList.component';
import { DeleteComponentClass } from './header/delete.component';
import { EditComponent } from './header/edit.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'add', component: AddCompoenent },
  { path: 'list', component: ListComponent },
  { path: 'delete', component: DeleteComponentClass },
  { path: 'displayList', component: DisplayListComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
