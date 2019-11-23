import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../agenda.service';
import { Persona } from '../../persona';



@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent {
  arrayElements: string[];

  constructor(private agendaServicio: AgendaService) {
    this.arrayElements = ["ID", "NOMBRE", "APELLIDO", "EDAD", "D.N.I", "FECHA DE NACIMIENTO", "COLOR FAVORITO", "SEXO", "NOTAS"]
  }
  getPersona(): Persona[] {
    return this.agendaServicio.getPersonaList();


  }

}

