const gulp = require("gulp");
// Importamos el server de gulp para subirlo con un livereloading
const server = require("gulp-server-livereload");

// Para que haya una primera tarea, le damos un nombre a esta tarea, esta función task recibe un callback, será asincrona
gulp.task("build", function (cb) {
  console.log("Construyendo el sitio");
  setTimeout(cb, 1200);
});

//Crearemos una tarea que nos inicie un server
gulp.task("serve", function (cb) {
  // Este callback servirá la web
  // con pipe encadenamos un string a otro
  gulp.src("www").pipe(
    server({
      // El livereloading va a ser true
      livereload: true,
      // Automáticamente nos abrirá el código
      open: true,
    })
  );
});

//Creamos una tarea por defecto de gulp
gulp.task("default", gulp.series("build", "serve"));
