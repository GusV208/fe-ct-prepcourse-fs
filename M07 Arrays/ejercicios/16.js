function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var meses = [];

  array.forEach(function (mes) {
    if (mes === 'Enero' || mes === 'Marzo' || mes === 'Noviembre') {
      meses.push(mes);
    }
  });

  if (meses.length === 3) {
    return meses;
  } else {
    return 'No se encontraron los meses pedidos';
  }

  // Con filter me devuelve un nuevo array con los elementos que cumplen la condicion, por lo tanto no pusheo.
  // Solucion prep

  //   var arrayDeMeses = array.filter(function (elemento) {
  //     if (elemento === 'Enero' || elemento === 'Marzo' || elemento === 'Noviembre') {
  //       return elemento;
  //     }

  // });

  // if (arrayDeMeses.length !== 3) {
  //   return 'No se encontraron los meses pedidos';
  // }

  // return arrayDeMeses;

}

module.exports = mesesDelAño;
