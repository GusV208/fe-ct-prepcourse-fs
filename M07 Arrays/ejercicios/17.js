function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var tabla = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  var resultados = tabla.map(function (x) {
  return x * 6;
});
  return resultados;
  
}


module.exports = tablaDelSeis;
