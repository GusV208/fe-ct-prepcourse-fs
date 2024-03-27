function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  
  let primerValor = array[0];

  for (elemento of array) {
    if (elemento !== primerValor) {
      return false;
    }
  }
  return true;
  
}

module.exports = todosIguales;
