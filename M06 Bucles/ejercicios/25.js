function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  // //Convierto en array con split y luego retorno los caracteres distintos a espacios en blanco para poder elimminarlos.
  // let convertidor = string.split("").filter(char=>char !==" ");
  // //Doy vuelta el array.
  // let invertido = convertidor.reverse("").join("");

  // if(string==invertido)return true;
  // else return false;

  //Solucion clases de Prep
  
  var palabra = string.replace(/ /g,"").toLowerCase();
  
  var j = string.length -1;
  
  
  for(var i=0; i<string.length;i++){
    if(palabra[i] !== palabra[j]) return false;
    j--;
  
  }

}

module.exports = esPalindromo;

