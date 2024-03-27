function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  // Inicializa la variable para almacenar el producto
  let producto = 1;//(se inicializa en 1 porque si lo hago en cero, todo lo que multiplique por cero da cero.)
  
  // Verificar si a y b son números positivos
  if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
    return 0;
  }
  // Si a es mayor que b, intercambia sus valores
  else if (a > b) {
    [a, b] = [b, a];
  }
  // Calcula el producto de los números entre a y b (inclusive)
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return producto;

}

module.exports = productoEntreNúmeros;