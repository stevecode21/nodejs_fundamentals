//const process = require('process')



// Antes de que el proceso finalice
process.on('beforeExit', () => {
  console.log("El proceso va a terminar");
})

// Accederemos al proceso global y verificamos que cuando el proceso acabe pase algo, una vez se ejecuta, ya se ha desconectado totalmente del event loop
process.on('exit', () => {
  console.log('Ale, el proceso acabó');
  setTimeout(() => {
    console.log("Esto no se va a ejecutar nunca ");
  })
})
// Esto será una excepción del proceso global en caso de que se rompa el código
process.on('uncaughtException', (err, origen) => {
  console.log('Vaya cubaya, se nos ha olvidado capturar un error');
  console.error(err);
})

functionQueNoExiste()