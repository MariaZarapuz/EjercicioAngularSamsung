import { Injectable } from '@angular/core';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agenda: Persona[];

  constructor() {
    this.agenda = [];
    this.agenda.push(new Persona('María', 'Sanchez Gomez', 30, '46863566-c', 'Verde', 'Mujer', "Mamá", '12/3/1989'));
    this.agenda.push(new Persona('Juan', 'Lopez García', 32, '60594725-f', 'Rojo', 'Hombre', 'Gestor de seguros', '30/5/1987'));
  }

  public getPersonaList(): Persona[] {
    return this.agenda
  }

  // postData(data: Persona) {
  //   console.log(data)
  //   return data


  // }

}
