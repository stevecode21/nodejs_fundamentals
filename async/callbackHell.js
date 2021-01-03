
function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre)
  }, 1000)
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla...")
    callbackHablar()
  }, 100)
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adiós", nombre);
    otroCallback()
  }, 1000)
}

// Declaramos una función que recibe el nombre con quien estamos hablando, las veces que queremos hablar y un callback que será lo queremos que pase después de terminar de hablar
function conversación(nombre, veces, callback) {
  // Si el numbero de las veces es mayor que 0, continua hablando 
  if (veces > 0) {
    // Para solucionar el callback hell usaremos la RECURSIVIDAD, la cual es simplemente llamar a la misma función pero con información ligeramente distinta
    // Por lo tanto llamaremos a la función hablar la cual ejecuta lo que tenga que en este caso es un bla bla bla y luego recibe como parámetro otra función (que es la misma conversación), se ejecutará una vez termine el proceso propio de la función hablar
    hablar(function () {
      // Lo que queremos que haga es que haya una conversación, llamamos la función conversación a la cual le pasamos los parametros necesarios para su ejecución
      conversación(nombre, --veces, callback)
    })
  } else {
    // De lo contrario ejecutamos mi función adios con un nombre al que se tiene que despedir y el segundo parámetro que recibe es el callback
    adios(nombre, callback)
  }
}
// Esto es un callback hell

console.log("Iniciando proceso...")
// Llamo a mi función y le envío un nombre y un callback con el parametro nombre
hola("Stiven", function (nombre) {
  // Y dentro de este callback llamo mi función conversación a la cual le envio como parámetro, el nombre, el número de veces y le envío el callback con un console.log que diga "Proceso terminado"
  conversación(nombre, 3, function () {
    console.log("Proceso terminado")
  })
})

// hola("Stiven", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log("Terminando proceso...")
//         })
//       })
//     })
//   })
// })