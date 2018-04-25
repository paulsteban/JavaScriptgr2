//metodos para iterar los arreglos.
let arregloNumeroUno: number[] = [1, 2, 3, 4, 5];
let arregloUsuario = [{nombre: "Paul", edad: 28}, {nombre: "Juana", edad: 10}, {
    nombre: "Melany",
    edad: 70
}, {nombre: "Saul", edad: 32}, {nombre: "Pepe", edad: 39}];
let arregloDeduadasFamiliares = [140, 314.23, 50.94, 17, 200];
//let arregloNumeroDos: Array<number> = [1,2,3,4,5];
//funciones de flecha gorda =>
let sumarDosNumeros = (numeroUno: number, numeroDos: number): number => {
    return numeroUno + numeroDos;
};
let potenciadeDosdeUnNumero = (numero) => numero * numero;
{

}
let sumatoriaDelValores = 0;
let resultadoForEach = arregloNumeroUno.forEach(
    (valorDelArreglo, indice, arreglo) => {
        sumatoriaDelValores = sumatoriaDelValores + valorDelArreglo;
        console.log(valorDelArreglo);
        console.log(indice);
        console.log(arreglo);
    }
);
console.log("resultadoForEach", resultadoForEach);
//parametros funcion y el valor que va a empezaar
var rsultadoSuma = arregloNumeroUno.reduce(
    (valorAcutalDeLaOperacion, valorDelArreglo) => {
        console.log("valorActualOperacion", valorAcutalDeLaOperacion);
        console.log("valorActual", valorDelArreglo);

        return valorAcutalDeLaOperacion - valorDelArreglo;
    }, 20
);
/*var rsultadoSuma = arregloNumeroUno.reduce(
    (valorAcutalDeLaOperacion,valorDelArreglo)=>
        console.log("valorActualOperacion",valorAcutalDeLaOperacion);
        console.log("valorActual",valorDelArreglo);

        return valorAcutalDeLaOperacion-valorDelArreglo;
    ,20
);*/
let TotalEdadDeLosUsuarios = arregloUsuario.reduce((total, usuario: UsuarioArreglo) => total + usuario.edad, 0);
console.log("totalusuario", TotalEdadDeLosUsuarios / arregloUsuario.length);

interface UsuarioArreglo {
    nombre: string;
    edad: number;
    casado?: boolean;
    deuda?: number;

}

const usuariosCasados = arregloUsuario.map((usuario: UsuarioArreglo) => {
    usuario.casado = false;
    return usuario;
}).map((usuario: UsuarioArreglo) => {
    usuario.deuda = CalcularDeuda(usuario.edad);
    return usuario;
}).filter((usuario:UsuarioArreglo)=>usuario.deuda <=310).some((usuario:UsuarioArreglo)=>usuario.edad <=18);
//.every((usuario:UsuarioArreglo)=>usuario.edad >=18);
console.log(arregloUsuario);
console.log(usuariosCasados);


function CalcularDeuda(edad: number): number {
    return arregloDeduadasFamiliares.reduce((totalDeuda, valorDeuda) => (totalDeuda + (valorDeuda * (edad / 100))))
}
