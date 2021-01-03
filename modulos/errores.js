function otraFuncion() {
  serompe()
}

function serompe() {
  return 3 + z;
}

// Función síncrona
function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error en mi función asíncrona");
      cb(error)
    }
  })
}

try {
  // otraFuncion()
  seRompeAsincrona(function (error) {
    console.log("Hay error", error.message);
  })
} catch (error) {
  console.error("Vaya algo se ha roto");
  console.error(error.message)
}

console.log("Esto de aquí está al final");