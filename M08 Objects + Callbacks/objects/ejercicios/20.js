function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  const suma = 0;

  for (let i = 0; i < objetoUsuario.posts.length; i++) {
    suma = suma + objetoUsuario.posts[i].likes;
  }

  return suma;

  // Solucion Henry

  // var resultado = objetoUsuario.posts.reduce(function(acum, item){
  //   return (acum = acum + item.likes);
  // }, 0); // inicializo el acum en cero, sino por defecto arranca en el primer elemento del arreglo.

  // return resultado;

}

module.exports = sumarLikesDeUsuario;
