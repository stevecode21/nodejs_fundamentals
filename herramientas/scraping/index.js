const puppeteer = require('puppeteer')

// Esto es una función que la metemos entre paréntesis para convertirla en expresión
(async ()=>{
    //Nuestro código
console.log("Lanzamos navegador!")
// Aquí lo que haremos será abrir el navegador
const browser = await puppeteer.launch({headless: false})
// Adicionalmente le decimos al navegador que abra una nueva página
const page = await browser.newPage()
// Aqui le decimos que la página a la debe dirigirse es a la página de wikipedia de nodejs
await page.goto('https://es.wikipedia.org/wiki/Node.js')

// Ejecutaremos un script que se ejecutará dentro del navegador de la página, y posteriormente devolveremos
var title1 = await page.evaluate(()=>{
    const h1 = document.querySelector('h1')
    console.log(h1.innerHTML);
    return h1.innerHTML
})
console.log(title1);

console.log("Cerramos navegador...")
// Con esta linea, cerramos el navegador de puppeteer
browser.close()
console.log("Navegador cerrado");
})()