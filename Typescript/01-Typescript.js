var nombre = "Paul";
nombre = "PEPE";
// 2 tipos de variables lectura, escritura
var cedula = '1723123141';
//cedula = "";// reaciacnar igualara otro valor
var apellido = "Eguez";
apellido = String(1); //duck Typing
apellido = 2;
var asda;
var usuario = { nombre: "paul", edad: "22" };
var Usuario = /** @class */ (function () {
    function Usuario(mNombre, mEdad) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    Usuario.prototype.imprimirUsuario = function (saludo) {
        //template stings
        return saludo + " Mi nimbre es : " + this.nombre + ", y mi edad es: " + this.edad;
    };
    return Usuario;
}());
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _edad) {
        this.nombre = nombre;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (nuevaEdad) {
            //cambiar los datos o transformarlos debugear
            this._edad = nuevaEdad;
        },
        enumerable: true,
        configurable: true
    });
    return UsuarioDos;
}());
var paul = new Usuario("Paul", 23);
console.log(paul.imprimirUsuario("hola"));
var juan = new UsuarioDos("pepe", 43);
console.log(juan);
//let carlos:UsuarioTres={nombre:"Carlos",edad: 18,esposa: new Usuario("Penelope",23);
//carlos.nombre;
