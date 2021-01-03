const http = require('http')

// Con esta línea creamos nuestro servidor, y le pasamos una función por la cual se levantará nuestro server, esta función tiene 2 parámetros, el request (la peticion) y la response (la respuesta del servidor)
http.createServer(router)
  // Empezar a escuchar en el puerto definido
  .listen(3000)

// Creo la función para tener un mayor control
function router(req, res) {
  console.log('Nueva petición');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      // Para el debugger
      let saludo = hola()
      res.write(saludo)
      // fin debugger
      // res.write('Hola, que tal')
      res.end()
      break
    default:
      res.write("Error 404: No se lo que quieres papu")
      res.end()
  }

  // Con esta línea escribimos una cabecera
  // res.writeHead(201, { 'Content-Type': 'text/plain' })

  // // Con esto escribimos una respuesta al usuario
  // res.write("Hola, ya se usar HTTP de NodeJS")
  // // Finalizamos la petición con esta linea
  // res.end()
}
function hola() {
  return 'Hola que tal'
}
console.log("Escuchando http en el puerto 3000");
