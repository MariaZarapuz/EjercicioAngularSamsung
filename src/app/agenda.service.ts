import { Injectable } from '@angular/core';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agenda: Persona[];
  persona: {};

  constructor() {
    this.agenda = [];

  }

  public getPersonaList(): Persona[] {
    return this.agenda
  }
  public postData(data) {
    this.createPerson(data)

  }

  createPerson(dataPerson) {
    this.agenda.push(new Persona(dataPerson.nombre, dataPerson.apellidos, dataPerson.edad, dataPerson.dni, dataPerson.cumple, dataPerson.colorFavorito, dataPerson.sexo, dataPerson.notas));
  }

  // postData(data: Persona) {
  //   console.log(data)
  //   return data


  // }

}
