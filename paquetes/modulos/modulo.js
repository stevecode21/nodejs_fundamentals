const saludar = () => {
  console.log("Hello");

  return "hola"
}

// Exportamos mi funcion
module.exports = {
  saludar,
  prop1: "Hola que tal"
}