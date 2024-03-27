function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  //Convertir el string en array
  let convertidor = texto.split("");
  //Tomamos el arreglo y lo damos vuelta y convertimos nuevamente en string para retornarlo.
  return convertidor.reverse().join("");

  //Solucion clases del Prep
  // var palabraFinal = "";
  // for(var i = texto.length -1; i>=0; i--){
  //   palabraFinal = palabraFinal+texto[i];
  // }
  // return palabraFinal;

}

module.exports = invertirTexto;