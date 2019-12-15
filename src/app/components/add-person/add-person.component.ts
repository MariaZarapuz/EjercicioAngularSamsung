import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { AgendaService } from '../../agenda.service'
import { Persona } from 'src/app/persona';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  person: FormGroup;
  personGroup: Persona;
  convertDate: string;



  constructor(private agendaService: AgendaService, public router: Router) {
    this.person = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/)]),
      edad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(125)]),
      dni: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]),
      cumple: new FormControl('', [Validators.required]),
      colorFavorito: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/)]),
      sexo: new FormControl(''),
      notas: new FormControl('')


    });
  }
  onSubmit() {
    if (this.person.valid) {
      this.personGroup = this.person.value;
      this.agendaService.postData(this.personGroup).subscribe(
        res => {
          console.log(res, "respuesta de post")
          this.router.navigate(['persons-list'])
        },
        error => {
          console.log(<any>error);
        }
      );

    }

  }
  ngOnInit() {

  }

  public handleError = (controlName: string, errorName: string) => {


    return this.person.controls[controlName].hasError(errorName);
  }


}

