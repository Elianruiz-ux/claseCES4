// TIPOS DE DATOS
var nombre = "juan";
console.log(typeof nombre);

var edad = 10;
console.log(typeof edad);

var boolean = true;
console.log(typeof boolean);

var nulo = null;
console.log(typeof nulo);

var undefined = undefined;
console.log(typeof undefined);

var jugador = { nombre: "juan" };
console.log(typeof jugador);

var arreglo = [1, 2, 3, 4];
console.log(typeof arreglo);

// TIPOS DE VARIABLES

// scope(ambito), redefinir
// () que, {} como

//ambito global
var numero = 10;

//ambito de la funcion
function explicarVar() {
  var edad = 10;
  if (true) {
    var edad = 50;
    console.log(edad);
  }
  console.log(edad);
}

console.log(explicarVar());

//condicional
if ((numero = 10)) {
  console.log(true);
} else {
  console.log(false);
}

//TEMPLATES LITERAL

const pais = "colombia";
const capital = "bogota";
const moneda = "peso colombiano";

const mensaje = `El pais de ${pais} donde la capital es: ${capital} su moneda es ${moneda}`;

console.log(mensaje);

//OBJECT ARRAYS
//Object es un conjunto de propiedades (clave: valor)  {}
//Array conjunto de elementos  []

const persona = {
  nombre: "pedro",
  edad: 10,
  saludar: function () {
    return "hola";
  },
};
console.log(persona);
persona.estado = false;
persona.apellidos = "perez";
console.log(persona);

const paises = ["colombia", 10, true, null, "brasil"];
paises.push("peru");
console.log(paises);

//FUNCIONES

/*
    funciones declaraticas (nombradas)
*/
function jugar(valor) {
  return valor * 1000;
}
console.log(jugar(87));

/*
    funciones de expresion
*/
const resultado = function (valor) {
  return valor * 1000;
};
console.log(resultado(7));

/* funcion flecha */
const funcionFlecha = (valor) => {
  return valor * 1000;
};

console.log(funcionFlecha(1));

//OPERADOR REST (para recibir parametros)
function calcularTotal(...datos) {
  let total = 0;
  datos.forEach((dato) => (total += dato));
  return total;
}
console.log(calcularTotal(1, 2, 2, 3, 4, 5, 20));

//OPERADOR SPREAD (para enviar argumentos)
const deudaBase = 1000;
const deuda = [100, 200, 300, 400];
const totalDeuda = [deudaBase, ...deuda];
console.log(totalDeuda);

const res = calcularTotal(...totalDeuda);
console.log(res);

//DESTRUCTURACION
const estudiantes = { nombre: "juan", apelido: "perez", edad: 10 };
// const { nombre, edad } = estudiantes;
// console.log(nombre);

const jugadores = ["messi", "ronaldo", "cristiano"];
const [, player1, player2] = jugadores;
console.log(player1);
console.log(player2);

//OBJETOS LITERALES
const nom = "juan";
const ap = "perex";
const ed = 10;

const jug = { nombre: nom, apellido: ap, edad: ed };
console.log(jug);

//CLASES
class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  saludar() {
    return `Hola ${this.name}`;
  }
}

const persona = new Person("elian", 20, "player");

console.log(persona);
