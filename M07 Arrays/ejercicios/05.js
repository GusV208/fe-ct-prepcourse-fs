function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  for(let i=0; i<array.length; i++){
    if(array[i].length > 5){
      return array[i];
    }
  }
  // let cambiarAString = array.split(" ");
  // for(let i=0; i<cambiarAString.length; i++){  
  //   if (cambiarAString[i].length >=5 ){
  //     return cambiarAString[i];
  //   }
  // }

}

module.exports = obtenerPrimerStringLargo;
