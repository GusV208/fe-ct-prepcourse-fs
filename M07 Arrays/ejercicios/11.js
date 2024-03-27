function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let arrayVacio = [];
  if(array.length===0) return arrayVacio;

  for(let i = 0; i < array.length; i++){
    let nuevoArray = array.map(function (x) {
      return x * i++;
    });
    return nuevoArray;
  }

  //Solucion prep
  //las funciones map, filter, reduce, ya te devuelven un nuevo array

  // var nuevoArray = array.map(function(elemento, indice){
  //   return (elemento * indice);
  // })
  // return nuevoArray;
  
}

module.exports = multiplicarElementosPorIndice;
