import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { AgendaService } from '../../agenda.service';
import { Persona } from 'src/app/persona';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  editPersona: FormGroup;
  datosPersona: {};
  updatePersona: Persona;
  convertDate: string;

  constructor(public agendaServicio: AgendaService, public router: Router) {

  }

  ngOnInit() {
    this.datosPersona = this.agendaServicio.getEdit();
    this.editPersona = new FormGroup({
      id: new FormControl(this.datosPersona['id']),
      nombre: new FormControl(this.datosPersona['nombre'], [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl(this.datosPersona['apellidos'], [Validators.required, Validators.minLength(3)]),
      edad: new FormControl(this.datosPersona['edad'], [Validators.required]),
      dni: new FormControl(this.datosPersona['dni'], [Validators.required, Validators.maxLength(9)]),
      cumple: new FormControl(this.datosPersona['cumple'], [Validators.required]),
      colorFavorito: new FormControl(this.datosPersona['colorFavorito'], [Validators.required, Validators.minLength(3)]),
      sexo: new FormControl(this.datosPersona['sexo'], [Validators.required]),
      notas: new FormControl(this.datosPersona['notas'])
    });
  }

  upDateSubmit() {

    this.updatePersona = this.editPersona.value;
    let id = this.updatePersona.id;
    this.agendaServicio.modificarPersona(id, this.updatePersona);
    this.router.navigate(['persons-list']);

  }

  public handleError = (controlName: string, errorName: string) => {
    return this.editPersona.controls[controlName].hasError(errorName);

  };


  formatDate(e) {
    return this.convertDate = new Date(e.target.value).toISOString().substring(0, 10);


  };

}

