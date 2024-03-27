function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  
  if (callback === undefined) return string;
  return callback(string);

  //Esta mal el enunciado .... solucion henry

  //if(callback){       -----> aca pregunta SI callback Existe....haz esto <---  ---> tambien puedo preg if(!callback) .. si NO Existe <---
  //  var resultado = callback(string);
  // return resultado;
  //} else return string;
  
}

module.exports = cambiarCadena;
