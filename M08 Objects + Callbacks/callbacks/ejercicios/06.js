function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  
  var nuevoArray = [];
  
  array.map(function(x){nuevoArray.push(cb(x))});

  return nuevoArray;
  
  //henry ---> el map ya retorna un nuevo arreglo, solo lo debo guardar en una variable.
  //var arrayNuevo = array.map(function(item){
    //return cb(item)
  //});
  //return arrayNuevo;
  
}

module.exports = map;
