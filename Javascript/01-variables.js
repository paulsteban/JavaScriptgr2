console.log('Hola mundo?');
var mutar; // undefined

var nombre = 'Paul';

mutar = nombre;
var edad = 23;
mutar = edad;
var deudas = 120.45;
var fechaNacimiento = new Date(); //El date es raro javascript no tiene clases?
var casado = false;
var estoyVacio = null;
var noestoydefinido = undefined;
if (noestoydefinido = 1) {
    console.log('Verdadero');
} else {
    console.log('Falso');
}
var usuariojson = {
    "nombre": "Paul",
    apellido: 'Cisneros',
    edad:SumarNumeros(0,23),
    imprimir: SumarNumeros
       //
        // console.log(this.nombre +''+this.apellido+''+edad);

};
delete usuariojson.apellido;
console.log(usuariojson.edad);
console.log(usuariojson.imprimir(1000,1000));
console.log(usuariojson.nombre);
console.log(usuariojson);
usuariojson.cedula = 17234;
usuariojson.mascota= {};
usuariojson.mascota.nombre= 'Vasquez';
console.log(usuariojson);
console.log(usuariojson.mascota.nombre);
console.log(typeof nombre);//String
console.log(typeof usuariojson);//object
console.log(typeof edad);//number
console.log(typeof fechaNacimiento);//object
function SumarNumeros(numero1,numero2) {
    suma=0;
    suma=numero1+numero2;
    return(suma);
}
SumarNumeros(2,2);//4
var sumaDosNumerosVersionDos =function (numero1,numero2) {
    suma=0;
    suma=numero1+numero2;
    console.log(suma);
}
var sumaDosNumerosVersionTres =function NoImportaSitieneNombre(numero1,numero2) {
    suma=0;
    suma=numero1+numero2;
    console.log(suma);
}
sumaDosNumerosVersionDos(5,5);
sumaDosNumerosVersionTres(6,6);
