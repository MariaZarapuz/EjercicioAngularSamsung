import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { timeout } from 'q';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agenda: Persona[];
  persona: {};
  convertDate: string;


  constructor(private router: Router) {
    this.agenda = [];

  }

  public getPersonaList(): Persona[] {

    return this.agenda
  }

  public postData(data) {
    this.createPerson(data)

  }
  public getPersonal() {
    this.getPersonaList()
  }

  createPerson(dataPerson) {

    this.agenda.push(new Persona(this.agenda.length, dataPerson.nombre, dataPerson.apellidos, dataPerson.edad, dataPerson.dni, dataPerson.cumple, dataPerson.colorFavorito, dataPerson.sexo, dataPerson.notas));
  }
  getPersonaId(id) {
    this.agenda.forEach(element => {

      if (element.id == id) {

        this.persona = element
      }

    });
  }
  getEdit() {
    return this.persona
  }

  modificarPersona(id, updatePersona) {
    this.agenda.forEach(element => {

      if (element.id == id) {
        element.nombre = updatePersona.nombre
        element.apellidos = updatePersona.apellidos
        element.edad = updatePersona.edad
        element.dni = updatePersona.dni
        element.cumple = updatePersona.cumple
        element.colorFavorito = updatePersona.colorFavorito
        element.sexo = updatePersona.sexo
        element.notas = updatePersona.notas

      }

    });
  }

  deletePersona(id) {
    this.agenda.forEach(element => {
      if (element.id == id) {
        this.agenda.splice(id, 1);

      }
      for (let index = 0; index < this.agenda.length; index++) {
        const element = this.agenda[index];
        element.id = index

      }
      this.router.navigate(['persons-list'])

    });

  }



}
