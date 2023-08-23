let equipos = ["nacional", "medellin"];

for (let i = 0; i < equipos.length; i++) {
  console.log(equipos[i]);
}

equipos.forEach((equipo) => {
  console.log(equipo);
});

// push, pop, shift, son mutables(significa que van a modificar mi estado inicial) //

equipos.push("pereira");
console.log(equipos);
equipos.shift();
console.log(equipos);
equipos.pop();
console.log(equipos);

//inmutables
// map = recorrer, iterar, y extraer informacion
let alumnos = ["junas", "juanes", "eli"];
let concatenar = alumnos.map((equipo) => `${equipo}-`);
console.log(concatenar);
console.log(alumnos);

let producto = [
  { name: "revista", costo: 10 },
  { name: "plancha", costo: 100 },
  { name: "jabon", costo: 40 },
  { name: "dedos de queso", costo: 45 },
];

let nameProducto = producto.map(
  (product, i) => `producto #${i} con nombre: ${product.name} `
);
console.log(nameProducto);

let pdtIVA = producto.map((pro) => {
  return { ...pro, iva: 19 };
});
console.log(pdtIVA);

const poli = [
  {
    nombre: "tecnica",
    ciudad: "medellin",
    graduado: 10,
    desertores: 0,
    periodo: 2020,
  },
  {
    nombre: "tecnologia",
    ciudad: "cordoba",
    graduado: 200,
    desertores: 0,
    periodo: 2020,
  },
  {
    nombre: "profesional",
    ciudad: "bogota",
    graduado: 30,
    desertores: 0,
    periodo: 2020,
  },
  {
    nombre: "especializacion",
    ciudad: "cali",
    graduado: 10,
    desertores: 0,
    periodo: 2020,
  },
  {
    nombre: "maestria",
    ciudad: "santa marta",
    graduado: 20,
    desertores: 0,
    periodo: 2020,
  },
  {
    nombre: "doctorado",
    ciudad: "cali",
    graduado: 33,
    desertores: 3,
    periodo: 2020,
  },
];

// EVERY
const sinDesertores = poli.every((p) => p.desertores === 0);
console.log(sinDesertores);

// SOME
const conDesertores = poli.some((p) => p.desertores > 0);
console.log(conDesertores);

// FILTER
const pSinDeser = poli.filter((i) => i.desertores === 0).map((m) => m.nombre);
console.log(pSinDeser);

const unicaCiudad = poli.filter((i) => i.ciudad == "cali").map((i) => i.nombre);
console.log(unicaCiudad);

// REDUCE
const graduadosCali = poli
  .filter((i) => i.ciudad == "cali")
  .reduce((cont, i) => (cont += i.graduado), 0);
console.log(graduadosCali);

const graduadosTotal = poli.reduce(
  (prev, act) => {
    return {
      graduado: prev.graduado + act.graduado,
      desertores: prev.desertores + act.desertores,
    };
  },
  { graduado: 0, desertores: 0 }
);
console.log(graduadosTotal);

const palabras = ["hola", "mundo como estas", "bien"];

const cocat = palabras.reduce((prev, act) => `${prev} ${act}`);

console.log(cocat);
