function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  
  //const suma=1;
  //let i=1;

  //do{
  //  i=i+1;
  //  suma=suma+i;
  //}
  //while (i<100);

  //return suma;

  let suma = 0;
  for(let i=1; i<=n; i++){
    suma = suma + i;
    if(i>99){
      break;
    }
  }
  return suma;
}

module.exports = sumarHastaNConBreak;