function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  //objetoUsuario.email.hasOwnProperty();

  //if (typeof objetoUsuario.email !== "undefined") { return true;} else return false;

  //Esta forma que la saque del slak no la entiendo porque se supune que esta diciendo que si esta la propiedad email retorne true. Independiente de eso nose si tiene un valor o no.

  if (objetoUsuario.email) {
    return true;
  } else {
    return false;
  }

}

module.exports = tieneEmail;
