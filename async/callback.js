/**
 * "Callback -> Una función que recibe otra función"
 */
function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    // Al callback vacio le envío el nombre que finalmente le llega por parámetro al callback y ya tengo acceso aquí
    miCallback(nombre)
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adiós", nombre);
    otroCallback()
  }, 1000)
}
console.log("Iniciando proceso...")
// Incluso podría enviarle por la función del segundo parámetro un parametro nombre
hola("Stiven", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso...")
  })
})