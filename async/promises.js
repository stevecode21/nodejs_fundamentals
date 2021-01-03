// Ya no necesitamos recibir un callback
function hola(nombre) {
  // Nuestras funciones en lugar de ejecutar cosas cuando sean, ejecutar una promesa
  // Nuestra promise lo que tendrá es un callback, porque al final nuestra función no deja de ser asíncrona, esta recibe 2 parámetros, resolve (resolver la promesa en caso de que todo vaya a bien) y reject(si detectamos un error rechazarla y no continuar)
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola " + nombre);
      // En lugar de ejecutar un callback, utilizamos resolve
      resolve(nombre)
    }, 1000)
  })
}

// Le paso el nombre a la función hablar, para poder irlo pasando a traves de la raiz de la cadena de promesas
function hablar(nombre) {
  // retnro una promesa
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla...")
      resolve(nombre)
      // En caso de que retornemos un error, ejecutamos reject
      // reject("Hay un error")
    }, 1000)
  })
}

function adios(nombre) {
  // Devolvemos una promesa aquí también
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adiós", nombre);
      // Ejecutamos el resolve
      resolve()
    }, 1000)
  })
}

console.log("Iniciando el proceso...");
// Llamo mi función hola de esta manera, le envio un nombre y en lugar de pasarle un callback, uso .then para resolver la promesa que esta función retorna
hola("Steve")
  .then(hablar)
  .then(adios)
  .then(
    //A este then la paso el callback en un arrow function (por usar ES6) y le envío el nombre
    (nombre) => {
      console.log("Terminado el proceso");
    })
  // Usaremos un catch para tratar el error y evitar que nuestra console explote (Esto siempre hay que ponerlo siempre que usemos un then)
  .catch(error => {
    console.log("Ha habido un error:");
    console.log(error);
  })