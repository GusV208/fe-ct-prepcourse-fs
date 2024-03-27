function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const arregloAux = [];
  for(let i=0;i<array.length;i++){
    arregloAux.push(array[i].toUpperCase());
  }
  return arregloAux;

}


module.exports = convertirStringAMayusculas;
