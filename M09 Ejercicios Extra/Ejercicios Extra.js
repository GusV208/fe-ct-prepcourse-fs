/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  let nuevoObjeto = (Object.entries(objeto));
  return nuevoObjeto;

  // Solucion Henry

  // var arrayPadre = [];

  // for(var propiedad in objeto){
  //   var array = [propiedad, objeto[propiedad]];
  //   arrayPadre.push(array);
  // }
  // return arrayPadre;

}



function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var arrayOrdenado = string.split("").sort();

  var suma = 1;
  var obj = {};

  for (let i = 0; i < arrayOrdenado.length; i++) {

    if (arrayOrdenado[i] === arrayOrdenado[i + 1]) {
      suma = suma + 1;
    } else {
      obj[arrayOrdenado[i]] = suma;
      suma = 1;
    }
  }

  return obj;


}



function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var comparar = string.toUpperCase();
  var cambioAArray = string.split("");

  var inicio = [];
  var final = [];

  for (var i = 0; i < cambioAArray.length; i++) {
    if (cambioAArray[i] === comparar[i]) {
      inicio.push(cambioAArray[i]);
    } else {
      final.push(cambioAArray[i]);
    }
  }

  var stringFinal = inicio.concat(final);
  return stringFinal.join("");

}



function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var palabrasSeparadas = frase.split("").toReversed().join("");
  console.log(palabrasSeparadas);

  var palabrasReverso = palabrasSeparadas.split(" ").toReversed().join(" ");
  console.log(palabrasReverso);

}



function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  const numeroOriginal = numero.toString();
  const numeroReverso = numero.toString().split("").toReversed().join("");

  if (numeroOriginal === numeroReverso) {
    return "Es capicua";
  } else return "No es capicua";

}




function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  const array = string.split("");
  const nuevoString = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "a" && array[i] !== "b" && array[i] !== "c") {
      nuevoString.push(array[i]);
    }
  }
  return nuevoString.join("");


}





function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  arrayOfStrings.sort(function (a, b) {
    return a.length - b.length
  });
  console.log(arrayOfStrings);


}
sortArray(['pera', 'manzana', 'alcaucil', 'papa']);



function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  const array3 = array1.concat(array2);

  const nuevoArray = [];

  for (let i = 0; i < array3.length; i++) {
    for (let j = i + 1; j < array3.length; j++) {
      if (array3[i] === array3[j]) {
        nuevoArray.push(array3[i])
      }
    }
  }
  return nuevoArray.sort();


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
