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
    if (this.agendaServicio.agenda == 0) {
      this.router.navigate(['add-person'])
    } else {
      this.datosPersona = this.agendaServicio.getEdit();
      console.log(this.datosPersona)

      this.editPersona = new FormGroup({

        nombre: new FormControl(this.datosPersona['nombre'], [Validators.required, Validators.minLength(3)]),
        apellidos: new FormControl(this.datosPersona['apellidos'], [Validators.required, Validators.minLength(3)]),
        edad: new FormControl(this.datosPersona['edad'], [Validators.required]),
        dni: new FormControl(this.datosPersona['dni'], [Validators.required, Validators.maxLength(9)]),
        cumple: new FormControl(this.datosPersona['cumple'], [Validators.required]),
        colorFavorito: new FormControl(this.datosPersona['colorFavorito'], [Validators.required, Validators.minLength(3)]),
        sexo: new FormControl(this.datosPersona['sexo'], [Validators.required]),
        notas: new FormControl(this.datosPersona['notas'])
      });



    }
  }

  upDateSubmit() {

    this.updatePersona = this.editPersona.value;
    console.log(this.updatePersona)
    let id = this.datosPersona._id;
    this.agendaServicio.modificarPersona(id, this.updatePersona).subscribe(
      res => {
        console.log("ok")
        this.router.navigate(['persons-list']);
      },
      error => {
        console.log(<any>error)
      }
    )


  }

  public handleError = (controlName: string, errorName: string) => {
    return this.editPersona.controls[controlName].hasError(errorName);

  };


  formatDate(e) {
    return this.convertDate = new Date(e.target.value).toISOString().substring(0, 10);


  };

}

