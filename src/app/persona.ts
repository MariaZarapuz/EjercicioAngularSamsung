

export class Persona {
    id: number;
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumple: string;
    colorFavorito: string;
    sexo: string;
    notas: string;

    constructor(id: number, nombre: string, apellidos: string, edad: number, dni: string, cumple: string, colorFavorito: string, sexo: string, notas: string) {
        this.id = id
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumple = cumple;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.notas = notas;
    }
}