import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    EditPersonComponent,
    PersonsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
