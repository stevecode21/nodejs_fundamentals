function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z
      callback(null, a)
    } catch (e) {
      callback(e)
    }
  }, 1000)
}

asincrona(function (err, dato) {
  // Si hay un error deberiamos parar totalmente la función
  if (err) {
    console.error("Tenemos un error")
    console.error(err)
    return false
    // throw err; // NO VA A FUNCIONES
  }

  console.log("Todo ha ido bien, mi data es", dato);
})




