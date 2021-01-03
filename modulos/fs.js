const fs = require('fs')

// Creamos una función para leer un archivo, esta función recibirá 2 parámetros una ruta y un callback
function leerArchivo(ruta, callback) {
  // Usamos el fs con su método para leer el archivo, el cual recibirá 2 parametros, la ruta de la que quiero leer y el callback
  // Los parámetros del callback serán un error si algo sale mal y el segundo es el data del archivo 
  fs.readFile(ruta, (err, data) => {
    //Leído
    callback(data.toString());
  })
}

// Creo una funcion para escribir un archivo, le enviamos como parametro la ruta, el condenido y un callback para saber si se ha escrito bien o no
function escribir(ruta, contenido, callbackDos) {
  // Accedemos al método de writeFile de fs, este necesita los 3 parametros
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No he podido escribirlo", err)
    } else {
      console.log("Se ha escrito correctamente");
    }
  })
}
// Creamos la función para borrar y le enviamos la ruta y un callback para saber si se creó bien o no
function borrar(ruta, callbackTres) {
  // Llamo el método de fs unlink 
  fs.unlink(ruta, callbackTres)
}
// Llamo a mi función borrar y le envío los parametros necesarios para su ejecución
borrar(__dirname + '/archivo1.txt', console.log)