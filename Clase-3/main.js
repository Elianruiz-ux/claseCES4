import Animal from "./animal.js";
import validarToken, { PERFILES, API_KEY } from "./helper.js";
// import validarToken, * as helpers from "./helper.js";

const animal = new Animal("tigre");
console.log(animal.print());

console.log(API_KEY);
console.log(PERFILES[0]);
console.log(validarToken());
