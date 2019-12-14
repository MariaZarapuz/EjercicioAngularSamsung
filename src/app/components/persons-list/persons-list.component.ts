import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgendaService } from '../../agenda.service';
import { Persona } from '../../persona';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  arrayElements: string[];
  getPersonaData: any;
  dataSource: MatTableDataSource<Persona>
  public agenda: {};
  persona: any;

  constructor(private router: Router, private agendaServicio: AgendaService) {
    this.arrayElements = ["NOMBRE", "APELLIDO", "EDAD", "D.N.I", "F.NACIMIENTO", "COLOR FAVORITO", "SEXO", "NOTAS"]
    this.persona = ''

  }
  ngOnInit() {
    this.getPersona()
  }
  getPersona() {
    return this.agendaServicio.getPersonaList().subscribe(
      res => {
        this.agenda = res
        this.agendaServicio.saveAgenda(this.agenda)
        console.log(this.agenda)
      },
      error => {
        console.log(<any>error)
      }
    )


  }
  editPerson(id) {

    this.agendaServicio.getPersonaId(id).subscribe(
      res => {
        this.persona = res
        this.router.navigate(['edit-person'])

        console.log(this.persona)
        this.agendaServicio.savePerson(this.persona)
      },
      error => {
        console.log(<any>error)
      }
    );

  }

  deletePerson(_id) {
    let id = _id
    this.agendaServicio.deletePersona(id).subscribe(
      res => {
        console.log(res)
        this.getPersona()
      },
      error => {
        console.log(<any>error)
      }
    );

  }

}

