// Destructuramos spawn del child process
const { exec, spawn } = require('child_process')


// En linux
// exec('ls -la', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false
//   }
//   console.log(stdout);
// })

// Ejecutamos nuestro proceso, que ejecuta otro proceso de node por debajo
// exec('node errores.js', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err.message);
//     return false
//   }
//   console.log(stdout);
// })

// let proceso = spawn('dir', ['-la'])
let proceso = spawn('ls', ['-la'])

// Podemos saber el id de lproceso
console.log(proceso.pid);
// Saber si está conectado
console.log(proceso.connected);

//

proceso.stdout.on('data', function (dato) {
  console.log("¿Está muerto?");
  console.log(process.killed);
  console.log(dato.toString());
})

proceso.on('exit', function () {
  console.log("El proceso terminó");
  console.log(proceso.killed);
})