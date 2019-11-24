import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgendaService } from '../../agenda.service';
import { Persona } from '../../persona';



@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent {
  arrayElements: string[];
  getPersonaData: any;

  constructor(private router: Router, private agendaServicio: AgendaService) {
    this.arrayElements = ["NUMERO", "NOMBRE", "APELLIDO", "EDAD", "D.N.I", "FECHA DE NACIMIENTO", "COLOR FAVORITO", "SEXO", "NOTAS"]
  }
  getPersona(): Persona[] {
    return this.agendaServicio.getPersonaList()


  }
  editPerson(e) {
    console.log(e)

    let id = e.target.parentElement.parentElement.parentElement.id;

    this.agendaServicio.getPersonaId(id);

  }

  deletePerson(e) {
    let id = e
    this.agendaServicio.deletePersona(id);

  }

}

