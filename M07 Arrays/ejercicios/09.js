function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let i = 0;
  let suma = array.reduce((accumulator, currentValue) => accumulator + currentValue,
  i,);
  let acumulado=[];
  for(let i=0; i<array.length;i++){
    if([i]>10){
      acumulado.push(suma);
    }
  }
  return acumulado;
}

module.exports = contarElementosMayoresA10;
