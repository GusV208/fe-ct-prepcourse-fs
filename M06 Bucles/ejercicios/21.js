function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  //Si el número es 0, no es potencia de 2.
  if (numero === 0) return false;

  //Mientras el número sea par y mayor que 1, dividelo por 2.
  while (numero % 2 === 0 && numero > 1) {
    numero = numero / 2;
  }

  //Si al final el número es 1, entonces era una potencia de 2.
  if (numero === 1) return true;
  else return false;

  //Solucion HENRY PREP

  while (numero > 1) {  //mientras el numero sea mayor a 1 hacer...
    if (numero % 2 !== 0) { //si el numero es impar...retornar falso;
      return false;

    } else {   // sino dividir por 2....hasta la condicion planteada arriba que sea mayor a 1;
      numero = numero / 2;

    }

  }
  return true; //el retorno afuera del bucle es para cuando se termine la condicion que sea mayor a 1 y ahi va a retornar verdadero;

}

module.exports = esPotenciaDeDos;
