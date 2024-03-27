function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:

  let resultado = (num % 2);
  
    if(resultado!==0){
       return true;
   } else{
       return false;
   }
}

module.exports = esImpar;