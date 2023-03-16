const { dibujo } = require("./AhorcadoSchema");

class Ahorcado {
  constructor(palabra, intentos = 6) {
    this.palabra = palabra;
    this.intentos = intentos;
    this.letrasAdivinadas = new Set();
  }

  // Método para comprobar si la letra adivinada es correcta
  adivinarLetra(letra) {
    if (!this.palabra.includes(letra)) {
      this.intentos--;
    }
    this.letrasAdivinadas.add(letra);
  }

  // Método para comprobar si se ha ganado el juego
  haGanado() {
    for (let letra of this.palabra) {
      if (!this.letrasAdivinadas.has(letra)) {
        return false;
      }
    }
    return true;
  }

  // Método para imprimir el estado actual del juego
  imprimirEstado() {
    let estado = "";
    for (let letra of this.palabra) {
      if (this.letrasAdivinadas.has(letra)) {
        estado += letra + " ";
      } else {
        estado += "_ ";
      }
    }
    console.log(`Estado: ${estado}  Intentos restantes: ${this.intentos}`);
    console.log(dibujo[this.intentos]);
  }
}

module.exports = { Ahorcado };
