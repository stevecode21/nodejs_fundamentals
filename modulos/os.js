// Traemos el modulo para acceder a información del SO
const os = require('os')

// Aqui sabremos la arquitectura de nuestro so
console.log(os.arch());

// Con este sabemos el sistema operativo que tenemos
console.log(os.platform());

// Accedemos a la información de las cpus de nuestro sistema
console.log(os.cpus().length);

// Accedemos la información de todos los errores y señales del sistema
console.log(os.constants);

const SIZE = 1024
// Creamos funciones para convertir los bytes
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

// Podemos ver la memoria libre que tenemos
console.log(os.freemem());
// Lo pasamos a kilobytes
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

// Mostramos el total de memoria que se tiene
console.log(gb(os.totalmem()));

// El home dir del usuario
console.log(os.homedir());

// Directorio para archivos temporales
console.log(os.tmpdir());

// Tambien podemos saber el hostname de la maquina
console.log(os.hostname());

// Podemos acceder a la interfaz de red
console.log(os.networkInterfaces());