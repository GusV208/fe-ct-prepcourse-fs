function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  
  let resultado = (num % 2);
  //let resto = (resultado);
    if(resultado===0){
       return true;
   } else if(resultado!==0){
       return false;
   }
  
 }

module.exports = esPar;
