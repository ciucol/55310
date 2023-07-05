class Persona {
  #nombre
  constructor(nombre) {
    this.#nombre = nombre
  }

  get nombre() {
    return this.#nombre
  }

  set nombre(nombre) {
    this.#nombre = nombre
  }
}

const mate = new Persona('Mate')

console.log(mate.nombre)
mate.nombre = 'Titín'
console.log(mate.nombre)
