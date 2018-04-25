//metodos para iterar los arreglos.
var arregloNumeroUno = [1, 2, 3, 4, 5];
var arregloUsuario = [{ nombre: "Paul", edad: 28 }, { nombre: "Juana", edad: 10 }, {
        nombre: "Melany",
        edad: 70
    }, { nombre: "Saul", edad: 32 }, { nombre: "Pepe", edad: 39 }];
var arregloDeduadasFamiliares = [140, 314.23, 50.94, 17, 200];
//let arregloNumeroDos: Array<number> = [1,2,3,4,5];
//funciones de flecha gorda =>
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var potenciadeDosdeUnNumero = function (numero) { return numero * numero; };
{
}
var sumatoriaDelValores = 0;
var resultadoForEach = arregloNumeroUno.forEach(function (valorDelArreglo, indice, arreglo) {
    sumatoriaDelValores = sumatoriaDelValores + valorDelArreglo;
    console.log(valorDelArreglo);
    console.log(indice);
    console.log(arreglo);
});
console.log("resultadoForEach", resultadoForEach);
//parametros funcion y el valor que va a empezaar
var rsultadoSuma = arregloNumeroUno.reduce(function (valorAcutalDeLaOperacion, valorDelArreglo) {
    console.log("valorActualOperacion", valorAcutalDeLaOperacion);
    console.log("valorActual", valorDelArreglo);
    return valorAcutalDeLaOperacion - valorDelArreglo;
}, 20);
/*var rsultadoSuma = arregloNumeroUno.reduce(
    (valorAcutalDeLaOperacion,valorDelArreglo)=>
        console.log("valorActualOperacion",valorAcutalDeLaOperacion);
        console.log("valorActual",valorDelArreglo);

        return valorAcutalDeLaOperacion-valorDelArreglo;
    ,20
);*/
var TotalEdadDeLosUsuarios = arregloUsuario.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
console.log("totalusuario", TotalEdadDeLosUsuarios / arregloUsuario.length);
var usuariosCasados = arregloUsuario.map(function (usuario) {
    usuario.casado = false;
    return usuario;
}).map(function (usuario) {
    usuario.deuda = CalcularDeuda(usuario.edad);
    return usuario;
}).filter(function (usuario) { return usuario.deuda <= 310; }).some(function (usuario) { return usuario.edad <= 18; });
//.every((usuario:UsuarioArreglo)=>usuario.edad >=18);
console.log(arregloUsuario);
console.log(usuariosCasados);
function CalcularDeuda(edad) {
    return arregloDeduadasFamiliares.reduce(function (totalDeuda, valorDeuda) { return (totalDeuda + (valorDeuda * (edad / 100))); });
}
