//callback = es una funcion que se le pasa como parametro a otra funcion.

function response(res) {
  console.log(res);
}

function calcular(op1, op2, funcionCallBack) {
  let resp = op1 + op2;
  funcionCallBack(resp);
}

const call = calcular(10, 20, response);
console.log(call);

//promesas: son un objeto, por naturaleza las promesar son asincronas.
// let promise = new Promise((res, rej) => {
//   let estado = false;
//   if (estado) {
//     res("Resolvio la promesa");
//   } else {
//     rej("Se rechazo la promesa");
//   }
// });

//opcion 1
// promise.then((valor) => console.log(valor)).catch((err) => console.log(err));

//opcion 2
// promise.then(
//   (valor) => console.log(valor),
//   (err) => console.log(err)
// );

// promesa con setTimeout, para evidenciar el asincronismo
// let promesa2 = new Promise((res) => {
//   console.log("inicio promesa2");
//   setTimeout(() => {
//     res("resolvio la promesa2");
//   }, 3000);
//   console.log("fin promesa2");
// });
// promesa2.then((valor) => console.log(valor));

// async = indicar a una funcionque regresa una promesa
// await = esperar el resultado de una promesa

// async function funcAsync() {
//   return "ejemplo async";
// }

// funcAsync().then(
//   (valor) => console.log(valor),
//   (err) => console.log(err)
// );

async function functionAsyncAwait() {
  console.log("inicio promesa3");
  let promesa3 = new Promise((res) => {
    setTimeout(() => {
      res("resolvio la promesa3");
    }, 3000);
  });
  console.log(await promesa3);
  console.log("fin promesa3");
}

functionAsyncAwait();
