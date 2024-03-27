function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:

  var suma = 0;

  // for(let i=0; i<arrayOfNumbers.length; i++){
  //   suma = suma + i;

  // }

  arrayOfNumbers.map(function (numero) {
    suma = suma + numero;
  });

  cb(suma);

  //Solucion henry

  // let resultado = arrayOfNumbers.reduce(function (acumulador, num) {
  //   return (acumulador = acumulador + num);
  // });
  // return cb(resultado);


}

module.exports = sumarArray;
