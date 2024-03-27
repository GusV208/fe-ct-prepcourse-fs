function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  let i = 0;
  let suma = resultadosTest.reduce(
    (acumulador, valorActual) => acumulador + valorActual, i,);

  return (suma / resultadosTest.length);

  //En solucion prep:

  //var resultado = resultadosTest.reduce(  function (acumulador, numero){
  // return (acumulador = acumulador - numero);
  //  } , x)  ----  El acumulador arranca en cero por default, si queremos que inicie en otro numero, debemos ponerlo en x ---
  //return resultado/resultadosTest.length;

}

module.exports = promedioResultadosTest;
