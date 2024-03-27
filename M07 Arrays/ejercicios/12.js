function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  
  let i = 0;
  let suma = arrayOfNums.reduce(
    (acumulador, valorActual) => acumulador + valorActual, i,);
  return suma;
}

module.exports = agregarNumeros;
