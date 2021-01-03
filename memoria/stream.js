const fs = require('fs')
//Importamos un stream
const stream = require('stream')

// Traemos util
const util = require('util')
const { createVerify } = require('crypto')

let data = ''

// Aquí estoy creando un stream de lectura
let readableStream = fs.createReadStream(__dirname + '/input.txt')

// UTF8 es el estandar internacional para poder escribir con caracteres, ñ, tildes 
// Decimos que este arhcivo siempre va a ser con este encoding
readableStream.setEncoding('UTF8')

// Escuchamos el evento en donde nos vienen datos
// readableStream.on('data', (chunk) => {
//   // Añadimos a data cuando un archivo sea pesado
//   data += chunk
// })

// // Verificamos cuando la lectura acabe
// readableStream.on('end', () => {
//   console.log(data);
// })

/**
 * Stream de escritura
 */

// Aquí escribimos una salida estandar del sistema
// No pone ni espacios ni salto de linea, solo lo que hace es escribir ya que process.stdout ya es un buffer de escritura
// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

// Creamos un buffer de transformación (al mismo tiempo puede leer y escribir)
const Transform = stream.Transform;

function Mayus() {
  // Creamos un constructor para este transform
  Transform.call(this)
}

// Nuestra funcion mayus trae todo lo que necesita de Transform
util.inherits(Mayus, Transform)

// Traemos la función mayus y accedemos a su prototipo, esto será igual a un callback que este traera la codificación, el chunk de información y el callback para ejecutar las cosas despues del proceso realizado
Mayus.prototype._transform = function (chunk, codif, cb) {
  // Transformo mi chunk a string y a mayuscula
  chunkMayus = chunk.toString().toUpperCase()
  this.push(chunkMayus)
  // Ejecuto el callback
  cb()
}

// Creo la transformación
let mayus = new Mayus()


// pipe es la funcion que se usa para pasar información de un stream a otro, lo paso a mayus y una vez termine, la salida se la voy a pasar al stdout
readableStream.pipe(mayus).pipe(process.stdout)

