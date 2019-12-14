import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  agenda: {};
  persona: {};
  convertDate: string;

  headers: any;


  constructor(private router: Router, private httpClient: HttpClient) {
    this.agenda = 0
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  }

  public getPersonaList(): Observable<any> {

    return this.httpClient.get("http://localhost:3000/users", this.headers)
  }

  public postData(data): Observable<any> {

    return this.httpClient.post("http://localhost:3000/users", data, this.headers);

  }
  public getPersonal() {
    this.getPersonaList()
  }


  getPersonaId(id) {
    return this.httpClient.get("http://localhost:3000/users/" + id, this.headers);
  }
  getEdit() {
    return this.persona
  }
  savePerson(person) {
    this.persona = person[0]
    console.log(this.persona)
  }
  saveAgenda(agenda) {
    this.agenda = agenda
    console.log(this.saveAgenda)
  }

  modificarPersona(id, updatePersona) {
    return this.httpClient.put("http://localhost:3000/users/" + id, updatePersona, this.headers);
  }

  deletePersona(id) {
    return this.httpClient.delete("http://localhost:3000/users/" + id, this.headers);
  }




}
