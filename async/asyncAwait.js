// Declaramos estas funciones como funciones asíncronas con "async"
async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre)
    }, 1000)
  })
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla...")
      resolve(nombre)
    }, 1000)
  })
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adiós", nombre);
      resolve()
    }, 1000)
  })
}


// Declaramos una función asíncrona que ejecutará cada uno de los procesos
async function main() {
  // Recordemos que debemos usar await para realizar los llamados de las funciones dentro de una función asíncrona
  let nombre = await hola("Steve")
  await hablar()
  await hablar()
  await adios(nombre)
  console.log("Terminando proceso...");
}
console.log("Iniciando proceso...");
// Llamamos la función para su ejecución
main()
