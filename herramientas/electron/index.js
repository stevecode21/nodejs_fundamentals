// Hacemos destructuring para traer 2 cosas de electron
const { app, BrowserWindow } = require("electron");

// Creamos una variable para traer la ventana principal
let mainWindow;

// Escuchamos un evento para que cuando la aplicación esté lista, iniciemos la ventana
app.on("ready", createWindow);
// Creamos una función la cual se encargará de crear la ventana
function createWindow() {
  // Creamos el objeto browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  // cargampos la aplicación, el load file será nuestro index.html
  mainWindow.loadFile("index.html");
}
