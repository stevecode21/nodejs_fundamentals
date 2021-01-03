let i = 1
// SetInterval funciona cuando quieres ejecutar algo cada cierto tiempo, recibe un parámetro como función 
let intervalo = setInterval(function () {
  if (i === 3) {
    // ClearInterval limpia el proceso del interval ejecutado actualmente
    clearInterval(intervalo)
  }
  i++
  console.log("Hola");
}, 1000)

//Los inmediatos se ejecutan de forma asincrona en cuanto puedan
setImmediate(() => {
  console.log("Ya mismo");
})