import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'persons-list' },
  { path: 'add-person', component: AddPersonComponent },
  { path: 'edit-person', component: EditPersonComponent },
  { path: 'persons-list', component: PersonsListComponent },
  { path: '**', redirectTo: 'persons-list' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
