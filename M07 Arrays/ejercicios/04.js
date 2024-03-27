function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  let random = Math.floor(Math.random() * array.length);
  return array[random];
}

module.exports = obtenerElementoAleatorio;
