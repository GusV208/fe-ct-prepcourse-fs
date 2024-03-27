// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    mascota: "perro",
    raza: "kaniche",
    amoroso: true,
    dueño: "Rocio",
    info: () => {
        console.log(this.mascota);
    },
};

objetoAnidado.mascota();

module.exports = objetoAnidado;
