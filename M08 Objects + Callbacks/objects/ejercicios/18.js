function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:

  objetoUsuario.amigos = [nuevoAmigo];
  return objetoUsuario;

  //Solucion Henry

  // objetoUsuario.amigos.push(nuevoAmigo);
  // return objetoUsuario;
}

module.exports = agregarAmigo;
