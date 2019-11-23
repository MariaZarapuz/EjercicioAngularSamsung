

export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    colorFavorito: string;
    sexo: string;
    notas: string;
    cumple: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, colorFavorito: string, sexo: string, notas: string, cumple: string) {

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.notas = notas;
        this.cumple = cumple;
    }
}