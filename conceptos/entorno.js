/**
 * Los codigos, claves o tokens no deberían estar dentro del código, para eso usamos las variables de entorno
 */
// Aquí accedemos a las variables de entorno y usamos un o para decirle en caso de que sea null utilice el parámetro sin nombre

let nombre = process.env.NOMBRE || "sin nombre"

console.log("Hola " + nombre);