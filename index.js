const { Ahorcado } = require("./Ahorcado");
const readline = require("readline");

const argv = require("yargs").options("p", {
  alias: "palabra",
  type: "string",
  demandOption: true,
  describe: "Palabra a adivinar",
}).argv;

const readDataOnTerminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const juego = new Ahorcado(argv.p, 5);

function jugar() {
  juego.imprimirEstado();

  readDataOnTerminal.question("ingresa una letra: ", (letra) => {
    juego.adivinarLetra(letra);
    if (juego.intentos > 0 && !juego.haGanado()) {
      jugar();
    } else {
      if (juego.haGanado()) {
        console.log("Felicitaciones care pija");
        // decir cual fue la palabra completa
      } else {
        console.log("Noooo!!");
      }
    }
  });
}

jugar();
