function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  console.log(propiedad, " porp");
  console.log(valor, " vlaor");

  const newobj = objeto[propiedad] = valor;
  console.log(objeto," objeto");
  console.log(newobj, " nuevp obj");
  return newobj; 
  
}

module.exports = actualizarValorPropiedad;
