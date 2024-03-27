function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let mayor = Math.max.apply(null, array);   
  
  for(let i=0; i < array.length; i++){
    if(array[i]>mayor) mayor = array[i];
    return array.indexOf(mayor);
  }
  //Por si esta vacío
  if(array.length===0)return 0;
}

module.exports = encontrarIndiceMayor;
