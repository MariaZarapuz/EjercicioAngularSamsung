import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { DirectiveNormalizer } from '@angular/compiler';
import { AgendaService } from '../../agenda.service'

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  person: FormGroup;
  personGroup: {};



  constructor(private agendaService: AgendaService) {
    this.person = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      edad: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required, Validators.maxLength(9)]),
      cumple: new FormControl('', [Validators.required]),
      colorFavorito: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sexo: new FormControl(''),
      notas: new FormControl('')


    });
  }
  onSubmit() {
    this.personGroup = this.person.value;
    console.log(this.personGroup)
    //this.agendaService.postData(this.personGroup)
  }
  ngOnInit() { }



  public handleError = (controlName: string, errorName: string) => {
    return this.person.controls[controlName].hasError(errorName);
  }

}

