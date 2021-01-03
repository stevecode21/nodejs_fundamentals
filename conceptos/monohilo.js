console.log("Hola Mundo")


let i = 0

// Set interval recibe 2 argumentos, el primero una función que va a ejcutar cada x tiempo y el segundo argumento es cada cuanto tiempo va a ejcutar esto (en milisegundos)
setInterval(function () {
  console.log(i)
  //Lo que se va a ejecutar en la función
  i++

  // Esto tendrá pero cuando llega a cierta validación, por lo que cuando se ejecute puede que no se perciba el error, por eso es importante estar pendiente de todo lo que pasa en el código.
  // if (i === 5) {
  //   var a = 3 + z
  // }
},
  // Cada segundo ejecutará el console.log
  1000)

console.log("Segunda instrucción");