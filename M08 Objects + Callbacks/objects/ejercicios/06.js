const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let contador = 0;
  for(var key in objeto){
    // let totalProp = key.length;
    contador += 1;
  }
  return contador;
};

module.exports = contarPropiedades;
