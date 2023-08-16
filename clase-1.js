var name = "hola";
console.log(typeof name);

// var el scope es global
// let es solo para el bloque
// const no se puede sobreescribir (depende del scope)

function suma() {
  const edad = 20;

  if (true) {
    const edad = 30;
    console.log(edad);
  }
  console.log(edad);
}

console.log(suma());
