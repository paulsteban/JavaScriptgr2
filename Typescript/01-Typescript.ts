let nombre: String = "Paul";
nombre = "PEPE";
// 2 tipos de variables lectura, escritura
const cedula = '1723123141';
//cedula = "";// reaciacnar igualara otro valor
var apellido :any = "Eguez" ;
apellido = String(1); //duck Typing
apellido = 2;
var asda;

let usuario = { nombre : "paul", edad:"22"};
class Usuario{
    nombre :string;
    private edad:number;
    constructor(mNombre:string,mEdad:number){
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    imprimirUsuario(saludo:String){
        //template stings
        return `${saludo} Mi nimbre es : ${this.nombre}, y mi edad es: ${this.edad}`;
    }
}
class UsuarioDos{
    constructor(public nombre:string, private _edad:number){

    }
get edad():number{
        return this._edad;
}
set edad(nuevaEdad:number) {
    //cambiar los datos o transformarlos debugear
        this._edad = nuevaEdad;
}


}
let paul = new Usuario("Paul",23);
console.log(paul.imprimirUsuario("hola"));
let juan = new UsuarioDos("pepe",43);
console.log(juan);

interface UsuarioTres {
    //tipar un objeto
    nombre:string;
    edad:number;



}
let carlos:UsuarioTres={nombre:"Carlos",edad: 18,esposa: new Usuario("Penelope",23);
};
carlos.nombre;
